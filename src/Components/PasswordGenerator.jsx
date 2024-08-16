import { useCallback, useEffect, useRef, useState } from "react"

const PasswordGenerator = () => {
    const [length, setLength] = useState(8)
    const [password, setPassword] = useState("")
    const [number, setNumber] = useState(false)
    const [spacialChar, setSpacialChar] = useState(false)
    const PassCopyRef = useRef()

    const passGen = useCallback(() => {
        let pass = ""
        let str = "QWERTYUIOPLMKJNBHGVCFDXZSAqazxswedcvfrtgbnhyujmkiolp"
        if (number) str += "1236547890"
        if (spacialChar) str += "!@#$%&_-*+/:;,.?"
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
            // console.log('char ', char)
        }
        // console.log('pass', pass)
        setPassword(pass)
    }, [length, number, spacialChar])

    const PasswordCopy = () => {
        PassCopyRef.current?.select()
        window.navigator.clipboard.writeText(password)
        // PassCopyRef.current?.setSelectionRange(0,length)
    }

    useEffect(() => {
        passGen()
    }, [length, number, spacialChar, passGen])

    // console.log('number', number)
    // console.log('spacialChar', spacialChar)
    return (
        <div className=" bg-gray-700 h-screen w-full flex items-center justify-center ">
            <div className="h-52 w-[50vw] bg-slate-300 rounded-lg flex flex-col gap-2 justify-center items-center">
                <div className="w-[80%] h-10 rounded-md flex items-center border  ">
                    <input
                        type="text"
                        value={password}
                        className="bg-white text-cyan-900 w-[80%]  size-full px-2 text-normal  "
                        readOnly
                        ref={PassCopyRef}
                    />
                    <button className="w-[20%] rounded-e-md h-full bg-blue-500 " onClick={PasswordCopy}> Copy </button>
                </div>
                <div className="flex  justify-start gap-2  flex-col ">
                    <div className="flex  gap-5 " >
                        <label> Length : {length}</label>
                        <input value={length} type="range" min={6} max={50} onChange={(e) => setLength(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-5 " >
                        <label> Numbers </label>
                        <input type="checkbox" value={number} onClick={() => setNumber(!number)} />
                    </div>
                    <div className="flex items-center gap-5 "  >
                        <label> CharSpacial </label>
                        <input type="checkbox" value={spacialChar} onClick={() => setSpacialChar(!spacialChar)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator