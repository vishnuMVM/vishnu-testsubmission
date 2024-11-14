function generateTableMarkup() {
    return `
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Size</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#1</td>
                    <td>
                        <select>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>
                    </td>
                    <td>
                        <select>
                            <option>Black</option>
                            <option>White</option>
                            <option>Red</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>#2</td>
                    <td>
                        <select>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>
                    </td>
                    <td>
                        <select>
                            <option>Black</option>
                            <option>White</option>
                            <option>Red</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

function toggleOptions(index) {

    document.querySelectorAll('.select-options').forEach((container, i) => {
        if (i === index) {
            container.innerHTML = generateTableMarkup();
        } else {
            container.innerHTML = '';
        }
    });


    const radioButton = document.getElementById(`product${index}`);
    radioButton.checked = true;
}
