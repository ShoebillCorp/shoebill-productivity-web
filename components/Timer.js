export default function Timer() {
    return (
        <div className="col-start-2 inline-grid row-start-2 text-center content-center text-white font-mono select-none">
            <div className="text-4xl">
                00:00:00
            </div>
            <br/>
            <button className="text-2xl">
                Pause
            </button>
        </div>
    )
}