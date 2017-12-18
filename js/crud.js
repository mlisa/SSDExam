function findAll() {
           
    $.ajax( {
        url: "api/clienti/GetAllClients",

        type: "GET",
        contentType: "application/json",
        data: "",
        success: function (result) {
            alert(result);
        },
        error: function (xhr, status, p3, p4) {
            var err = "Error " + " " + status + " " + p3;
            if (xhr.responseText && xhr.responseText[0] == "{")
                err = JSON.parse(xhr.responseText).message;
            alert(err);
        }
    });
}


function findById() {
    var id = $('#txtId').val();
    $.ajax({
        url: "api/clienti/GetClient/" + id,
        // url: "api/OrdiniId/GetCustOrders?name=" + name, 
        // se param stringa
        type: "GET",
        contentType: "application/json",
        data: "",
        success: function (result) {
            alert(result);
        },
        error: function (xhr, status, p3, p4) {
            var err = "Error " + " " + status + " " + p3;
            if (xhr.responseText && xhr.responseText[0] == "{")
                err = JSON.parse(xhr.responseText).message;
            alert(err);
        }
    });
}

function insertId() {
    var id = $('#txtId').val();
    var quant = $('#txtNewQuant').val();
    var options = {};
    options.url = "/api/Clienti/insertCustomer";
    options.type = "POST";
    options.data = JSON.stringify({
        "id": id,
        "req": quant,
        "mag": 1
    });
    options.dataType = "json";
    options.contentType = "application/json";
    options.success = function (msg) {
        alert(msg);
    };
    options.error = function (err) {
        alert(err.statusText
        );
    };
    $.ajax(options);
}

function updateId() {
    var options = {};
    options.url = "/api/Clienti/updateCustomer";
    options.type = "PUT";
    options.data = JSON.stringify({
        "id": $("#txtId").val(),
        "req": $('#txtNewQuant').val()
    });
    options.dataType = "json";
    options.contentType = "application/json";
    options.success = function (msg) { alert(msg); };
    options.error = function (err) {
        alert(err.statusText
        );
    };
    $.ajax(options);
}

function deleteId() {
    var options = {};
    options.url = "/api/Clienti/deleteCustomer/" +
    $("#txtId").val();
    options.type = "DELETE";
    options.contentType = "application/json";
    options.success = function (msg) {
        alert(msg);
    };
    options.error = function (err) {
        alert(err.statusText
        );
    };
    $.ajax(options);
}

function getInstance()
        {
            var ajaxHelper = new AjaxHelper("/api/clienti");

            var getGAPCallback = function (res) {
                alert(res);
                console.log(res);
            }

            var actionCallback = function (msg) {
                alert(msg)
            }

            let id = $("#txtId").val();
            console.log(id);
            ajaxHelper.getGAP("getGAPInstance?id=" + id, getGAPCallback);
        }

        
        function AjaxHelper(baseUrl)
        {
            this._baseUrl = baseUrl;
            var callWebAPI = function (url, verb, data, callback)
            {
                var xhr = new XMLHttpRequest();
                xhr.onload = function (evt)
                {
                    var data = JSON.parse(evt.target.responseText);
                    callback(data);
                }
                xhr.onerror = function ()
                {  alert("Error while calling Web API");
                }
                xhr.open(verb, url);
                xhr.setRequestHeader("Content-Type", "application/json");
                if (data == null)
                    xhr.send();
                else
                    xhr.send(JSON.stringify(data));
            }
            this.getGAP = function(id, callback)
            {
                callWebAPI(this._baseUrl + "/" + id, "GET", null, callback);
            }
        }    