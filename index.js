//http://universities.hipolabs.com/search?country=india"

async function getData1() {
    var rawdata = await fetch("http://universities.hipolabs.com/search?country=india")
    var data = await rawdata.json()
    var table = document.getElementById("table")
    for (let i = 0; i < data.length; i++) {
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        td1.innerHTML = i + 1
        var td2 = document.createElement("td")
        td2.innerHTML = data[i].name
        var td3 = document.createElement("td")
        var a = document.createElement("a")
        a.href = data[i].web_pages[0]
        a.innerHTML = data[i].web_pages[0]
        td3.append(a)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        table.appendChild(tr)
    }
}
getData1()
async function getData2() {
    var country = document.getElementById("country").value
    var rawdata = await fetch("http://universities.hipolabs.com/search?country=" + country)
    var data = await rawdata.json()
    var table = document.getElementById("table")

    var second = document.getElementById("second")
    second.removeChild(table)
    if (data.length > 0) {
        table = document.createElement("table")
        table.id = "table"
        var tr = document.createElement("tr")
        var th1 = document.createElement("th")
        th1.innerHTML = "SN"
        var th2 = document.createElement("th")
        th1.innerHTML = "Univercity Name"
        var th3 = document.createElement("th")
        th1.innerHTML = "Website URL"
        tr.append(th1)
        tr.append(th2)
        tr.append(th3)
        table.appendChild(tr)
        second.appendChild(table)
        for (let i = 0; i < data.length; i++) {
            var tr = document.createElement("tr")
            var td1 = document.createElement("td")
            td1.innerHTML = i + 1
            var td2 = document.createElement("td")
            td2.innerHTML = data[i].name
            var td3 = document.createElement("td")
            var a = document.createElement("a")
            a.href = data[i].web_pages[0]
            a.innerHTML = data[i].web_pages[0]
            td3.append(a)
            tr.append(td1)
            tr.append(td2)
            tr.append(td3)
            table.appendChild(tr)
        }
    }
    else {
        var h3 = document.createElement("h3")
        h3.innerHTML = "No Result for this input"
        second.appendChild(h3)
    }
}