import Vue from 'vue'

export const dateFormat = function(date, format = 'YYYY-MM-DD') {
    const d = new Date(date)
    return format.replace('YYYY', d.getFullYear())
        .replace('MM', d.getMonth() + 1)
        .replace('DD', d.getDate())
        .replace('HH', d.getHours())
        .replace('mm', d.getMinutes())
        .replace('ss', d.getSeconds())
}

const filters = {
    dateFormat
}

for (const key in filters) {
    if (filters.hasOwnProperty(key)) {
        Vue.filter(key, filters[key])        
    }
}

export default filters