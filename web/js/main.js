/*
    load floor image
*/
function loadFloor(floor){
    floor = typeof floor !== 'undefined' ? floor : 2;
    $('#mainContent img').attr('src','img/maps/floor'+floor+'.png');
}

/*
    dot position in percent to image
 */
function drawDot(x,y,className,name){
    className = typeof className !== 'undefined' ? className : '';
    name = typeof name !== 'undefined' ? name : '';
    $('#floorImg').append('<div class="dot '+className+'" style="left:'+x+'%;top:'+y+'%">');
}

/*
    beacon or photo
 */

function showButton(content){
    content = typeof content !== 'undefined' ? content : 'photo';
    var icon;
    if(content=='photo'){
        topButton = '<h1 class="text-center">Rends-toi au point actif</h1>';
        button = '<a href="#" id="takePic"><h4>Active l\'appareil photo et scanne l\'oeuvre</h4><img alt="" src="img/picto_photo3.png"></a>';
    }else{
        button = '<span class="glyphicon glyphicon-fullscreen"></span>';
    }
    $('#topContent').html(topButton);
    $('#subContent').html('<div class="actionBtn">'+button+'</div>');
}

/*
    clean main content
 */
function hideMainContent(){
    $('#mainContent').html('');
}

function transparentBackground(){
    $('html').attr('style','background:transparent;');
    $('body').attr('style','background:transparent;');
}
/*
    show image from app
 */
function loadPersonPicture(imgUrl){
    if(imgUrl != undefined){
        $('#personImg').append('<img src="'+imgUrl+'">')
    }
}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return null;
    }
    else{
        return results[1] || 0;
    }
}

$( document ).ready(function() {
    var idList = ["8oo2l8fk3pdlzy6","knliyajr8y6x0yt","bja43whspny60x2"];
    var theList;
    $('#formmuseochoix').submit(function(e) {
        e.preventDefault();
        if($('#timing .active input').val() == '30'){
            var theList = idList[Math.floor(Math.random() * idList.length)];
        }else if($('#timing .active input').val() == '60'){
            theList = idList.slice(0, 2);
        }else if($('#timing .active input').val() == '90'){
            theList = idList.slice(0, 3);
        }else{
            theList = idList;
        }
        document.location = 'museochoix://loadContexts?ids='+theList.toString();
        return false;
    });

    $(document).on('click', '#takePic', function (e) {
        e.preventDefault();
        hideMainContent();
        transparentBackground();
        $('#topContent').html('');
        $('#subContent').html('');
    });
});