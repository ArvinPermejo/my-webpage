document.addEventListener('DOMContentLoaded', function(){
    const table = document.getElementById('table-part');

    table.innerHTML = `
        <table>
            <tr>
                <td><strong>Email:</strong></td>
                <td>arvint.pmrnjg@gmail.com</td>
                <td><strong>Nationality:</strong></td>
                <td>Filipino</td>
            </tr>
            <tr>
                <td><strong>Location:</strong></td>
                <td>Santa Cruz Marinduque</td>
                <td><strong>Education:</strong></td>
                <td>MarSU</td>
            </tr>
            <tr>
                <td><strong>Age:</strong></td>
                <td>20</td>
                <td><strong>Degree:</strong></td>
                <td>BSIT</td>
            </tr>   
        </table>
    `;
});