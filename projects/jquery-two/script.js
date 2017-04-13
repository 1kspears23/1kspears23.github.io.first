/*global $*/
(() => {

    let avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

    const toDashCase =
        (string) => string.toLowerCase().split(" ").join("-");

    const createAvenger = 
    (a) => { $("<li>")
            .addClass(toDashCase(a))
            .text(a);
    };

    const createAvengers = (avengers) => {
        let $ul = $("<ul>").attr("id", "avengers");

        let avengersLis = avengers.map(createAvenger);

        return $ul.append(avengersLis);

    };

    const avengersReassemble = () => {
        let newAvengers = ["Thor", "Hulk", "Iron Man", "Captian America"];
        let $newAvengers = newAvengers.map(createAvenger);

        $("#avenger").empty().append($newAvengers);


        // $("#avengers").detach(".ant-man");
        // $("#avengers").detach(".wasp");
        // let $antMan =$(".ant-man");
        // let $wasp = $(".wasp");


    };

    $(".container").append(createAvengers(avengers));
    
    avengersReassemble();
    
    $("button").on("click", () => {
        console.log("tada!");
    });
    
    $("[name=first-input]").on("key-up", (e) =>{
        console.log(e.target.value)
    })
    


})();