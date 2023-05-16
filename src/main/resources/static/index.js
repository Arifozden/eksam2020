function regMelding(){
    const melding={
        fornavn:$("#fornavn").val(),
        etternavn:$("#etternavn").val(),
        klubb:$("#klubb").val(),
        epost:$("#e-post").val(),
        passord:$("#passord").val()
    };
    $.post("/lagre",melding,function (){

    })
        .fail(function (jqXHR){
            const json=$.parseJSON(jqXHR.responseText);
            $("#feil").html(json.message);
        });
}

function login(){
    const bruker={
        epost:$("#e-post").val(),
        passord: $("#passord").val()
    };
    if(validerOK()){
        const url="/login";
        $.get(url,bruker,function (innlogget){
            if(innlogget){
                window.location.href='index.html';
            }else {
                $("#loggetInn").html("Feil e-post eller passord");
            }
        })
            .fail(function (jqXHR){
                const json=$.parseJSON(jqXHR.responseText);
                $("#feil").html(json.message);
            });
    }

}

function validerEpost() {
    const epost = $("#epost").val();
    const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const ok = regexp.test(epost);
    if(!ok) {
        $("#loggetInn").html("Feil i e-post");
        return false;
    } else {
        $("#loggetInn").html("");
        return true;
    }
}
function validerPassord() {
    const passord = $("#passord").val();
    const regexp = /^(?=.*[A-ZÆØÅa-zæøå])(?=.*\d)[A-ZÆØÅa-zæøå\d]{6,}$/;
    const ok = regexp.test(passord);
    if(!ok) {
        $("#loggetInn").html("Feil i passord");
        return false;
    } else {
        $("#loggetInn").html("");
        return true;
    }
}
function validerOK() {
    if(validerEpost() && validerPassord()){
    return true;
    }
    return false;
}