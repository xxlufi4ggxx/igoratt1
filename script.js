document.querySelector("#signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let contact = document.querySelector("#contato").value.trim();
    let password = document.querySelector("#senha").value.trim();
    let fullname = document.querySelector("#nomecompleto").value.trim();
    let username = document.querySelector("#nomeusuario").value.trim();
    let errorMessage = document.querySelector("#error-message");
    
    if (contact === "" || password === "" || fullname === "" || username === "") {
        errorMessage.textContent = "Todos os campos são obrigatórios.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        window.location.href = "paginadeboasvinda.html";
    }
});