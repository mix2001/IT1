var uploader = document.getElementById('uploader');
const database = firebase.database();
const storage = firebase.storage();
const Musikkdata = database.ref("Musikkdata");
const skjema = document.querySelector("#skjema");

const inpMusikkTekst = document.querySelector("#inpMusikkTekst");
const inpFil = document.querySelector("#inpFil");
const alleMusikkne = document.querySelector("#alleMusikkne");


function lagreData(url){
  let MusikkURL = url;
  let Musikknavn = inpMusikkTekst.value;
  let Musikkinfo = {
    "url":MusikkURL,
    "tekst":Musikknavn
  }
  Musikkdata.push(Musikkinfo);
}

function lastOppMusikk(evt){
  let fil = inpFil.files[0];
  let lagringsplass = storage.ref("Musikk/"+ inpMusikkTekst.value);
  lagringsplass.put(fil)
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => lagreData(url));
  }


function visAlleMusikkne(snapshot){
  let Musikkdata = snapshot.val();
  alleMusikkne.innerHTML = `
  <article>
    <p>${Musikkdata.tekst}</p>
    <audio src=${Musikkdata.url} controls
    </audio>
  </article>
  <hr>
  ` + alleMusikkne.innerHTML;
};
Musikkdata.on("child_added",visAlleMusikkne);

//Update progressbar
    task.on('state_changed',

    function progress(snapshot){
    var percentage = (snapshot.bytesTransferred /
    snapshot.totalBytes)* 100;
    uploader.value = percentage;
    },
    function error(err) {
    },
    function complete(){

    }
  );
