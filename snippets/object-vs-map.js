
const simple_object = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
}

console.log(simple_object,'\n');

const numbers = ['1', '2']
const obj_with_key_of_other_type = {
    [numbers]: 'value1',
    // ['1','2']: 'value1', //Error
    key2: 'value2',
    key3: 'value3',
}
console.log(obj_with_key_of_other_type);

const empty_map = new Map()
const simple_map = new Map([[1, "Sam"], [2, "John"]])

console.log(empty_map);
console.log(simple_map, ',size =' + simple_map.size);

simple_map.set(3, "Doe")

console.log(simple_map, ',size =' + simple_map.size);

console.log('\niteration in object -');
for(const key in simple_object){
    console.log(key + ':' + simple_object[key])
}
//OR
for(const [index, item] of Object.entries(simple_object)){
    console.log(index + '->' + item)
}

console.log('\niteration in object -');
for(const item of simple_map){
    console.log(item)
}
//OR
for(const [k,v] of simple_map){
    console.log(k,'->',v)
}

console.log('\nDeletion');
delete simple_object.key1
simple_map.delete(3)
console.log(simple_map, ',size =' + simple_map.size);
console.log(simple_object,'\n');

/*
key Diff b/w object and map in JS: 

1. object Can have only strings in keys
2. A map is iterable in insertion order
*/