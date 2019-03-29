import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { DoctorDetails } from "./app-logic";

$(document).ready(function() {
  let searchType = "";
  $("#clear").click(function() {
    location.reload(true);
  });
  $("#options a").click(function() {
    searchType = $(this).attr("id");
    let searchTypeLabel = $(this).text();
    $("#searchType").text(searchTypeLabel + " ");
  });
  $("#submit").click(function() {
    let searchParameter = $("#searchParameter").val();
    $("#searchParameter").val("");
    let location = $("#location").val();
    $("#location").val("");
    $(".result p").val("");

    let newDoctorInfo = new DoctorDetails();
    let promise = newDoctorInfo.getDoctor(searchType, searchParameter,location);

    promise.then(
      function(response) {
        let body = JSON.parse(response);
        if (body.data.length === 0) {
          $("#resultNone").append("No doctor found!");
          $("#resultAvail").hide();
        } else {
          $("#resultAvail").show();
          for (let doc in body.data) {
            let path = body.data[doc].practices[0];
