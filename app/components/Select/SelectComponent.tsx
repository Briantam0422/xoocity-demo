import { CountriesType } from '@/app/types/CountryType'
import { Select } from 'antd'
import { ReactNode } from 'react'

type tProps = {
    placeholder: string,
    options: Array<CountriesType>,
    disable?: boolean
}

export default function SelectComponent({ placeholder, options, disable }:tProps){
    return (
        <>
            <Select placeholder={placeholder} options={options} disabled={disable}></Select>
        </>
    )
}