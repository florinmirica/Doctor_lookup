export class DoctorDetails
{
  getDoctor(searchType,searchParameter,location)
  {
    return new Promise(function(resolve,reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?${searchType}=${searchParameter}&location=${location}&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if(this.status === 200)
        {
          resolve(request.response);
        }
        else{
          reject(Error(request.statusText));
        }
      };
      request.open("GET",url,true);
      request.send();
    });
  }
}
