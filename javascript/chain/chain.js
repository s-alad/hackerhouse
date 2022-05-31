"use strict";

document.addEventListener("DOMContentLoaded", function() {
    //addBlocks(10)
    randomizeBlocks()
    randomize()
});


function addBlocks(length) {
    console.log("adding blocks")
    let chain = document.getElementById("blockchain");

    let arrow = '<div class="pointer"><img src="assets/static/point.svg"/></div>'

    for (let i = 0; i < length; i++) {

        if (i != length - 1) {
            chain.innerHTML += `
            <span style="margin-right: 18px;">
                <div class="block">
                    <div class="top"></div>
                    <div class="mid">
                        <div class="member">
                        </div>
                        <div class="memberbio">
                        </div>
                    </div>
                    <div class="bot"></div>
                </div>
            </span>
            `
        }
        else {
            chain.innerHTML += `
                <div class="block">
                    <div class="top"></div>
                    <div class="mid">
                        <div class="member">
                        </div>
                        <div class="memberbio">
                        </div>
                    </div>
                    <div class="bot"></div>
                </div>
                `
        }
    }
}

function randomize() {
    setInterval(function() {
        console.log("iter")
        randomizeBlocks();
    }, 15000);
}

function randomizeBlocks() {
    console.log("editing blocks")
    let chain = document.getElementById("blockchain");
    let blocks = chain.getElementsByClassName("block");

    let items = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
    ]
    let verified = []

    for (let i = 0; i < blocks.length; i++) {
        let top = blocks[i].getElementsByClassName("top")[0];
        let mid = blocks[i].getElementsByClassName("mid")[0];
        let bot = blocks[i].getElementsByClassName("bot")[0];

        let select;

        do {
            select = Math.floor(Math.random()*items.length)
        } while(verified.includes(select)) {
            verified.push(select)
        }
        console.log(select)
        let value = (Math.random() * 1000000000).toFixed(0);
        var item = items[select];

        //var messenger = new Messenger(mid, [item])
        var messenger = new Messenger(bot, [value]);
        var menuitems = new Messenger(document.getElementsByClassName("menuitem")[i], ["Coming Soon!"])
        if (i == 0) {
            var messenger = new Messenger(top, [(Math.random() * 1000000000).toFixed(0)]);
        }
        if (i == blocks.length - 1) {
            
        }
        else {
            top = blocks[i+1].getElementsByClassName("top")[0];
            var messenger = new Messenger(top, [value]);
            top.innerHTML = value
        }

        
    }
}