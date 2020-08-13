export const KWEGONIAN = {
    polsx: 1000,
    jinjin: 500,
    jij: 100,
    kilow: 50,
    pol: 10,
    jin: 5,
    kil: 1
}

export const sum = (values) => values.reduce((aggr, cur, idx, arr) => {
    const next = arr[idx+1]
    const current = arr[idx]

    if(next > current) {
        return Math.floor(aggr - cur)
    }

   return Math.floor(aggr + cur)
}, 0)

export const translate = (value) => {
    const words = value.split(' ')

    const translated = words.map(word => KWEGONIAN[word])
    
    console.log({ value, words , translated: translated, summary: sum(translated) })
    return {
        input: value,
        output: sum(translated)
    }
}

