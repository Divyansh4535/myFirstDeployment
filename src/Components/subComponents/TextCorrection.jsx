import { useRef, useState } from 'react';

const TextCorrection = () => {
    const CopyRef = useRef(null)
    const [data, setData] = useState(["Divyansh ", "kutta ", "Chube", "Aman"])

    const CopyMe = (text) => {
        const currentValue = CopyRef.current.value
        const selectionStart = CopyRef.current.selectionStart
        const selectionEnd = CopyRef.current.selectionEnd
        const CursorPosition = selectionStart + text.length
        // console.log('selectionStart', selectionStart)
        // console.log('selectionEnd', selectionEnd)
        // console.log('CursorPosition', CursorPosition)
        if (CopyRef.current) {
            const newValue = currentValue.substring(0, selectionStart) + text + currentValue.substring(selectionEnd)
            CopyRef.current.value = newValue
            CopyRef.current.focus()
            CopyRef.current.setSelectionRange(CursorPosition,CursorPosition)
            console.log('newValue', newValue)
            // } else {
            // const newValue = text + currentValue.substring(selectionEnd)
            // CopyRef.current.value = newValue
            // CopyRef.current.focus()
            // CopyRef.current.setSelectionRange(CursorPosition,CursorPosition)
        }
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen bg-gray-200'>
            <div className='flex items-center flex-col p-5 h-[50%] w-[70%] bg-slate-500  '>
                <input type="text" className='w-[90%] h-[20%] px-2 ' ref={CopyRef} />
                <table className="w-52  h-10 text-white mt-5" >
                    {data.map((item, idx) => {
                        return (
                            <tr key={idx} className='p-2 m-1'>
                                <td id='text'  > {item} </td>
                                <td className="bg-blue-700 px-2 cursor-pointer py-1 rounded-md  text-center " onClick={() => CopyMe(item)}>Insert</td>
                            </tr>)
                    })}
                </table>
            </div>
        </div>
    )
}

export default TextCorrection