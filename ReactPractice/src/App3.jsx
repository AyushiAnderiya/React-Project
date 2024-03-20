import './App3.css'

function App3() {
    let k;
    const d = new Date();
    console.log(d);
    if (d.getHours() < 12) {
        k = "Morning 🌅";
        document.querySelector("#main").style.backgroundColor=("#19F7E9");
    }
    else if (d.getHours() < 14) {
        k = "Afternoon 🌞";
        document.querySelector("#main").style.backgroundColor=("#F7DF19");
    }
    else if (d.getHours() > 17 && d.getHours() < 20) {
        k = "Evening 🌄";
        document.querySelector("#main").style.backgroundColor=("#1A83A8");

    }
    else {
        k = "Night 🌙";
        document.querySelector("#main").style.backgroundColor=("black");

    }

    return (
        <>
            <div id="main" >
                <h1>Hello  , </h1>
                <h1>Good {k}</h1>
            </div>
        </>
    );
}

export default App3;