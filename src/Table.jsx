import React, { useState } from 'react'

export const Table = () => {
    // let [num, setNum] = useState(0);
    // const click = () => {
    //     setNum((num) => (num -= 1))
    // };
    // <button onClick={click}>=1</button>
    let [Info, setInfo] = useState([
        { id: 1, name: 'Sevinch', surname: 'Sayfutdinova', coins: 0 },
        { id: 2, name: 'Jovohir', surname: 'Murodov', coins: 0 },
        { id: 3, name: 'Shoxsulton', surname: 'Isoqov', coins: 0 },
        { id: 4, name: 'Hamidulloh', surname: 'Mirvorisov', coins: 0 },
        { id: 5, name: 'Bexruz', surname: 'Bardiyev', coins: 0 },
        { id: 6, name: 'Bexruz', surname: 'Nomurodov', coins: 0 },
        { id: 7, name: 'Fayoziddin', surname: 'Appakxodjayev', coins: 0 },
        { id: 8, name: 'Mubina', surname: 'Fathullayeva', coins: 0 },
        { id: 9, name: 'Alibek', surname: 'Akromov', coins: 0 },
        { id: 1, name: 'Shoxdiyor', surname: 'Shirinboyev', coins: 0 },
    ])
    const handleAddCoin = (id) => {
        setInfo(prevInfo => {
            return prevInfo.map(student => {
                if (student.id === id) {
                    return { ...student, coins: student.coins -= 1 }
                }
                return student;
            })
        })
    }
    const AddCoin = (id) => {
        setInfo(prevvInfo => {
            return prevvInfo.map(student => {
                if (student.id === id) {
                    return { ...student, coins: student.coins += 5 }
                }
                return student;
            })
        })
    } 
    return (
        <section className='lg:px-20 bg-bleck text-white flex justify-center pt-20'>
            <table>
                <thead className='bg-be text-gray-600'>
                    <tr className='flex flex-row'>
                        <th className='w-[50px] md:w-[100px] lg:w-[200px] h-[65px] border-[1px] flex justify-center items-center'>N%</th>
                        <th className='w-[100px] md:w-[200px] lg:w-[300px] h-[65px] border-[1px] flex justify-center items-center'>Name</th>
                        <th className='w-[150px] md:w-[250px] lg:w-[350px] h-[65px] border-[1px] flex justify-center items-center'>Surname</th>
                        <th className='w-[100px] md:w-[200px] lg:w-[400px] h-[65px] border-[1px] flex justify-center items-center'><img src="https://classroomcoins.uz/static/media/coin.0521e373be1873359030.png" className='w-[25px] h-[25px]' alt="" /></th>
                    </tr>
                </thead>
                <tbody className='bg-kor'>
                    {Info.map((student) => (
                        <tr className='flex flex-row' key={student.id}>
                            <td className='w-[50px] md:w-[100px] lg:w-[200px] h-[65px] border-[1px] flex justify-center items-center'>{student.id}</td>
                            <td className='w-[100px] md:w-[200px] lg:w-[300px] h-[65px] border-[1px] flex justify-center items-center'>{student.name}</td>
                            <td className='w-[150px] md:w-[250px] lg:w-[350px] h-[65px] border-[1px] flex justify-center items-center'>{student.surname}</td>
                            <td className='w-[50px] md:w-[100px] lg:w-[200px] h-[65px] border-[1px] flex justify-center items-center gap-3'><button onClick={() => handleAddCoin(student.id)} className='w-[40px] h-[40px] rounded-full bg-red-600 text-white'>-1</button> <button onClick={() => AddCoin(student.id)} className='w-[40px] h-[40px] rounded-full bg-red-600 text-white'>+5</button></td>
                            <td className='w-[50px] md:w-[100px] lg:w-[200px] h-[65px] border-[1px] flex justify-center items-center'>{student.coins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
