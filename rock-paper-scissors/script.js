var paper = '<img class="img-responsive" id="paper-icon" src="images/icon-paper.svg">';
var rock = '<img class="img-responsive" id="rock-icon" src="images/icon-rock.svg">';
var scissors = '<img class="img-responsive" id="scissors-icon" src="images/icon-scissors.svg">';

function computerChoice() {
    var choice = Math.floor(Math.random() * 3);
    var pick;
    if (choice === 0) {
        pick = 'rock';
    } else if (choice === 1) {
        pick = 'paper';
    } else {
        pick = 'scissors';
    };
    return pick;
};

function comparePicks(player, computer) {
    if (player === computer) {
        return "tie";
    }
    if (player === "rock") {
        if (computer === "scissors") {
            return "player";
        } else {
            return "computer";
        }
    }
    if (player === "paper") {
        if (computer === "rock") {
            return "player";
        } else {
            return "computer";
        }
    }
    if (player === "scissors") {
        if (computer === "rock") {
            return "computer";
        } else {
            return "player";
        }
    }
};

$(document).ready(function () {
    $("#playAgain").click(function () {
        $(".result").css('display', 'none');
        $(".play").css('display', 'block');
        $('.yourPick').empty();
        $('.computerPick').empty();
    });
    
    
    
    
    var score = 0;
    $(".playBtn").click(function () {
        
        
        var playerPick = $(this).val();
        if (playerPick === "rock") {
            $('.yourPick').attr('id', 'rock');
            $('.yourPick').append(rock);   
        } else if (playerPick === "paper") {
            $('.yourPick').attr('id', 'paper');
            $('.yourPick').append(paper);
        }
        else {
            $('.yourPick').attr('id', 'scissors');
            $('.yourPick').append(scissors);
        }
        
        
        
        
        var computerPick = computerChoice();
        if (computerPick === "rock") {
            $('.computerPick').attr('id', 'rock');
            $('.computerPick').append(rock);
        } else if (playerPick === "paper") {
            $('.computerPick').attr('id', 'paper');
            $('.computerPick').append(paper);
        }
        else {
            $('.computerPick').attr('id', 'scissors');
            $('.computerPick').append(scissors);
        }
        
        
        
        if (comparePicks(playerPick, computerPick) === "player") {
            score += 1;
            $('.outcome').text("YOU WIN");
            $('#playAgain').css('color', 'hsl(229, 25%, 31%)');
        } else if (comparePicks(playerPick, computerPick) === "tie") {
            score += 0;
            $('.outcome').text("IT'S A TIE");
            $('#playAgain').css('color', 'hsl(229, 25%, 31%)');
        } else {
            score -= 1;
            $('.outcome').text("YOU LOSE");
            $('#playAgain').css('color', 'red');
        }
        $("#score").text(score);
        $(".play").css('display', 'none');
        $(".result").css('display', 'block');
    })
});
