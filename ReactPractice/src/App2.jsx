function App2() {
    const d=new Date();
    return (
        <>
            <h1>Today's Information</h1>
            <p>{`Today's Date is :-${d.getDate()}/${d.getMonth()}/${d.getFullYear()} `}</p>
            <p>{`Current time is:-${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `}</p>
        </>
    )
};

export default App2;