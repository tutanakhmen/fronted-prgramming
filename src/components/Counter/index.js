import { useEffect, useState } from "react";

function Counter() {
    /**
     * Usestate mengembalikan sepasang value (array): [0, function()]
     */
    function addAngka() {
        setAngka(angka + 1);
    }

    function updateDOM() {
        console.log("Lifecycle: Component dimount");
        document.title = `Hasil: ${angka}`;
    }

    // Membuat state
    const [angka, setAngka] = useState(0);

    // Melakukan Side Effect
    useEffect(updateDOM, [angka])

    console.log("Lifecycle: Component dirender");

    return (
        <div>
            <p>Hasil: {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    )
}

export default Counter;