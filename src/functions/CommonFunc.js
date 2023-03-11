export const GetTagWording = (tag_color) => {
    switch (tag_color) {
        case 'Red':
            return 'Extreme'
        case 'Blue':
            return 'Normal'
        case 'Green':
            return 'Recovered'
        default:
            return ''
    }
}

export const GenerateAgeSelect=()=>{
    var list = [];

    while(list.length < 100){
        list.push({
            value: list.length + 1,
            label : list.length + 1
        })
    }
    return list;
}