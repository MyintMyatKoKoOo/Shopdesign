$(document).ready(function() {
    scrollchg();
    loginregister();
    search();

    
});
function mbpasshow1(tar){
    if($(tar).prop("checked") == true){
        $("#inputgroup__pass1").attr("type","text");
    }
    else{
        $("#inputgroup__pass1").attr("type","password");
    }
}
function mbpasshow2(tar){
    if($(tar).prop("checked") == true){
        $("#inputgroup__pass2").attr("type","text");
    }
    else{
        $("#inputgroup__pass2").attr("type","password");
    }
}
function mbpasshow3(tar){
    if($(tar).prop("checked") == true){
        $("#inputgroup__pass3").attr("type","text");
    }
    else{
        $("#inputgroup__pass3").attr("type","password");
    }
}
function mbpasshow4(tar){
    if($(tar).prop("checked") == true){
        $("#inputgroup__pass4").attr("type","text");
    }
    else{
        $("#inputgroup__pass4").attr("type","password");
    }
}
    // $("#inputgroup__passwarp>input").keyup(function(){
    //    if($("#inputgroup__passwarp>input").val() != ""){
    //        $("#inputgroup__passwarp #inputgroup__passicon").css("visibility","visible");
           
    //    }else{
    //        $("#inputgroup__passwarp #inputgroup__passicon").css("visibility","hidden");
       
    //    }
    // });
    // $("#inputgroup__passicon").click(function(){
        
    //     if($("#inputgroup__passwarp>input").attr("type")==="password"){
    //         $("#inputgroup__passwarp>input").attr("type","text");
    //         $("#inputgroup__passwarp #inputgroup__passicon").html("<i class='far fa-eye'></i>");
          
    //     }else{
    //         $("#inputgroup__passwarp>input").attr("type","password");
    //         $("#inputgroup__passwarp #inputgroup__passicon").html("<i class='far fa-eye-slash'></i>");
 
    //     }
     
    // });
    //    $("#inputgroup__passwarp1>input").keyup(function(){
    //    if($("#inputgroup__passwarp1>input").val() != ""){
    //        $("#inputgroup__passwarp1 #inputgroup__passicon1").css("visibility","visible");
           
    //    }else{
    //        $("#inputgroup__passwarp1 #inputgroup__passicon1").css("visibility","hidden");
       
    //    }
    // });
    // $("#inputgroup__passicon1").click(function(){
        
    //     if($("#inputgroup__passwarp1>input").attr("type")==="password"){
    //         $("#inputgroup__passwarp1>input").attr("type","text");
    //         $("#inputgroup__passwarp1 #inputgroup__passicon1").html("<i class='far fa-eye'></i>");
          
    //     }else{
    //         $("#inputgroup__passwarp1>input").attr("type","password");
    //         $("#inputgroup__passwarp1 #inputgroup__passicon1").html("<i class='far fa-eye-slash'></i>");
 
    //     }
     
    // });
    
function scrollchg() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $("#header").addClass("sticky");
            $("#header_list li a").addClass("text-dark");
            $("#header #logo_text").addClass("text-dark");
            $("#header i").addClass("text-dark");
        } else {
            $("#header").removeClass("sticky");
            $("#header_list li a").removeClass("text-dark");
            $("#header #logo_text").removeClass("text-dark");
            $("#header i").removeClass("text-dark");
        }
    });
}

function search() {
    $("#search").click(function() {

        if ($("#search_wraper").length) {
            $("#search_wraper").remove();
        } else {
            let div = $("<div>", {
                "id": "search_wraper"
            });

            let input = $("<input>", {
                "class": "form-control",
                "id": "search_input",
                "placeholder": "Search"
            }).keydown(function(e) {
                if (e.which == 13) $("#search_btn").click();
            });
            let searchbtn = $("<input>", {
                "type": "submit",
                "id": "search_btn"
            }).css({
                display: "none"
            }).click(function() {
                alert("Searching.....");
            });
            let close = $("<span>", {
                "id": "search_close"
            }).html("&times;").click(function() {
                $(this).parent().remove();
            });
            div.append(searchbtn);
            div.append(input);
            div.append(close);

            $(header).append(div);
        }

    });
}

function loginregister() {
    if ($("#lrsys_btn").length) {
        $("#lrsys_btn").click(function() {
            if ($("#lrsys_btn").text() == "Sign In") {
                $("#lrsys__wrap").css({
                    "margin-left": "568px"
                });
                $("#lrsys_btn").text("Create Account");
            } else {
                $("#lrsys__wrap").css({
                    "margin-left": "0px"
                });
                $("#lrsys_btn").text("Sign In");
            }

        });
    }
    if ($("#mb-signin").length && $("#mb-createaccount").length) {
        $("#mb-signin").click(function() {
            $("#mb-signinpage").show();
            $("#mb-createaccountpage").hide();
            $("#mb-signin").css({
                "background": "#ecec"
            });
            $("#mb-createaccount").css({
                "background": "#ffffff"
            });
        });
        $("#mb-createaccount").click(function() {
            $("#mb-signinpage").hide();
            $("#mb-createaccountpage").show();
            $("#mb-signin").css({
                "background": "#ffffff"
            });
            $("#mb-createaccount").css({
                "background": "#ecec"
            });
        });
    }
}
