document.addEventListener('DOMContentLoaded', (event) => {
    const Mapping = {
        "Date of last work unit": "last",
        "Active CPUs within 50 days": "active_50",
        "Team Id": "id",
        "Grand Score": "score",
        "Work Unit Count": "wus",
        "Team Ranking": "rank"
    };

    var content_from_api
    const uri = `https://api.foldingathome.org/team/252736`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";


    fetch(proxyurl + uri)
        .then(res => {
            return res.json()
        }).then(response => {
            content_from_api = response
            console.log(response);
            const table = document.getElementById("teaminfobody");
            for (var key in Mapping) {
                table_row = document.createElement("tr");
                const table_key = document.createElement("td");
                const table_value = document.createElement("td");
                table_key.style = "font-weight:600";
                table_key.textContent = key;
                console.log(content_from_api[Mapping[key]]);
                if (Mapping[key] == "rank") {
                    table_value.textContent = content_from_api[Mapping[key]]
                    table_value.textContent += `/${response.teams}`
                }
                else {

                    table_value.textContent = content_from_api[Mapping[key]]
                }
                table_row.append(table_key, table_value);
                table.append(table_row);
            }

            for (var i of document.getElementsByClassName("loader1")) {
                i.style = "display:none;";
            }

        }).catch(err => {
            console.log(err, "Error While Fetching stats. Come again Later.")
        })



    var donors = [];
    const proxyuri = "https://cors-anywhere.herokuapp.com/"

    fetch(proxyuri + uri + '/members').then(res => {
        return res.text();
    }).then(resp => {
        const table_2 = document.getElementById("tbody2");
        const headers = ["Rank", "Name", "Credits", "Work Units"];
        const tr = document.createElement("tr");

        for (var i of headers) {
            var something = document.createElement("td");
            something.style = "font-weight:600;align:center";
            something.textContent = i;
            tr.append(something)
        }

        table_2.append(tr);

        var x = JSON.parse(resp)
        x.shift();
        for (var i of x) {
            donors.push({ name: i[0], rank: i[2], credit: i[3], wus: i[4] })
        }
        for (var donor of donors) {
            var { name, credit, wus, rank } = donor;
            if (rank == undefined) { rank = "N/A" }
            var obj = { rank, name, credit, wus };
            console.log("Individual people data down |v");
            console.log(obj);
            const tr = document.createElement("tr");
            for (var i in obj) {
                const td = document.createElement("td");
                td.textContent = obj[i];
                tr.append(td);
            }
            table_2.append(tr);
        }
        for (var i of document.getElementsByClassName("loader2")) {
            i.style = "display:none;";
        }
    }).catch(err => {
        console.log(err)
    })



});



