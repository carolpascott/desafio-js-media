let students = [
    {
        name: "Raquel",
        test1: 8,
        test2: 6
    },
    {
        name: "Gabriel",
        test1: 6.5,
        test2: 4
    },
    {
        name: "Rose",
        test1: 8.5,
        test2: 6.5
    },
    {
        name: "Gustavo",
        test1: 7,
        test2: 0
    },
    {
        name: "Andressa",
        test1: 9,
        test2: 7
    }

]


function calcMedia(t1, t2) {
    
    const media = 7
    const mediaStudent = (t1 + t2) / 2

    if(mediaStudent >= media)
        return `Parabéns, você está aprovado(a)! Sua nota média foi ${mediaStudent}`
    else
        return `Não foi desta vez! Sua nota média foi ${mediaStudent}`
}

for(let student of students) {
    alert(`${student.name},
${calcMedia(student.test1, student.test2)}`)
}