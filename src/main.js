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
