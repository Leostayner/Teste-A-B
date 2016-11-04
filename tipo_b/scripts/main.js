  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC5mDuWKbA3oT0CwsU-mequ_Jqh7xHuvhs",
    authDomain: "projeto2-cd.firebaseapp.com",
    databaseURL: "https://projeto2-cd.firebaseio.com",
    storageBucket: "projeto2-cd.appspot.com",
    messagingSenderId: "1014610566735"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  logs = this.database.ref('logs');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
} 