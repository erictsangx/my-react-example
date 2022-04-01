import Select from 'react-select'


const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
]

interface ReactSelectProps {
}

export function ReactSelect(props: ReactSelectProps): JSX.Element {
    return <Select options={options} isClearable/>
}
