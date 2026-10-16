function Hire({ hours, rate, handleHire, handleClear }) {
    return (
        <>
        <div className="flex flex-col items-center justify-center gap-8 px-20 pt-8">
            <h3 className="text-2xl font-bold">Hire me for {hours} hours</h3>
            <p className="mt-1 text-xl">Total: <span className="font-bold text-[#FA8112]">PHP {hours * rate}</span></p>
        </div>
        <div className="flex gap-4">
                <button className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]" onClick={handleHire}> Add Hour </button>
                <button className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold" onClick={handleClear}> Reset</button>
            </div>
            </>
    );
}
export default Hire;