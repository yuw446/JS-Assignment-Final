$(() => {
    loadProjectsData();
    console.log("JS Connected");

    loadCoronaData();
});

function loadProjectsData() {
    $.getJSON("data.json", (data) => {

        // for (let i in data) {
        //     console.log(data[i]);
        // }

        genContent(data);
    });
}

genContent = (temp) => {
    let source = $("#portfolio-template").html();
    let template = Handlebars.compile(source);
    let result = template(temp);
    let list = $(".project-list");
    list.append(result);
}

function loadCoronaData() {
    $.ajax({
        url: "https://api.covid19api.com/summary",
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);

            $("#corona-cases").append(data.Global.TotalConfirmed);
            $("#corona-deaths").append(data.Global.TotalDeaths);
            // $("#Corona-stats").append("Global Infections: " + data.Global.TotalConfirmed + " Deaths: " + data.Global.TotalDeaths);
        }
    })
}
