import * as React from 'react';
import { useState } from 'react';
import { Form, Container, Table, Checkbox, Responsive } from 'semantic-ui-react'
import { number, any } from 'prop-types';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const diaboptions = [
    { key: 'yes', text: 'Yes', value: 'Yes' },
    { key: 'no', text: 'No', value: 'No' },
    { key: 'un', text: 'Unknown', value: 'Unknown' },
]


export const countryOptions = [
    { key: 'ZW', text: 'Zimbabwe', flag: 'zw', value: 'Zimbabwe', code: '+263', lang: 'en' },
    { key: 'ZA', text: 'South Africa', flag: 'za', value: 'South Africa', code: '+27', lang: 'pt' },
    { key: 'MZ', text: 'Mozambique', flag: 'mz', value: 'Mozambique', code: '+258', lang: 'pt' },
]

export var cityOptions: any[] = [{ key: 'ZW', text: 'Harare', flag: 'zw', value: 'Harare' },
{ key: 'ZW', text: 'Gweru', flag: 'zw', value: 'Gweru' },
{ key: 'ZW', text: 'Kadoma', flag: 'zw', value: 'Kadome' },]

let list = [{ "id": 1, "firstName": "Morriss", "lastName": "Baradza", "age": 30, "sex": "Male", "city": "Harare", "country": "Zimbabwe", "diabetes": "yes" }];





export const basicInitialState = { id: 0, firstName: "", lastName: "", age: 0, sex: "", city: "", country: "", diabetes: "" };
export const BasicForm = () => {
    const [state, setState] = useState(basicInitialState);
    const [users, setUsers] = useState(list);
    const [user, setUser] = useState({ id: 0, firstName: "", lastName: "", age: 0, sex: "", city: "", country: "", diabetes: "" });

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const handleSexChange = (e: any, result: any) => {
        setState({ ...state, sex: result.value });
    }

    const handleCountryChange = (e: any, result: any) => {
        setState({ ...state, country: result.value });
    }

    const handleCityChange = (e: any, result: any) => {
        setState({ ...state, city: result.value });
    }

    const handleDiabetesChange = (e: any, result: any) => {
        setState({ ...state, diabetes: result.value })
    }



    const handleSubmit = (e: any) => {

        console.log(state, "jh")
        console.log(`${state.firstName}`, `${state.lastName}`, `${state.age}`, `${state.sex}`)
        var obj1 = { "id": 1, "firstName": `${state.firstName}`, "lastName": `${state.lastName}`, "age": `${state.age}`, "sex": `${state.sex}`, "city": "Harare", "country": "Zimbabwe", "diabetes": "yes" }
        let obj = JSON.stringify(obj1);

        list.push(JSON.parse(obj));
        setState({ ...basicInitialState });

    }

   


    return (
        <Container textAlign="center">
            <br /> <br /> <br /> <br />
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input name="firstName" value={state.firstName} fluid label='First name' onChange={handleChange} placeholder='First name' />
                    <Form.Input fluid label='Last name' name="lastName" value={state.lastName} onChange={handleChange} placeholder='Last name' />
                    <Form.Select
                        fluid
                        name="sex"
                        value={state.sex}
                        label='Gender'
                        options={options}
                        placeholder='Gender'
                        onChange={handleSexChange}
                    />
                    <Form.Input type="number" fluid label='Age' name="age" value={state.age} onChange={handleChange} placeholder='Age' />

                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Select
                        fluid
                        name="country"
                        value={state.country}
                        label='Country'
                        options={countryOptions}
                        placeholder='Country'
                        onChange={handleCountryChange}
                    />

                    <Form.Select
                        fluid
                        name="city"
                        value={state.city}
                        label='City'
                        options={cityOptions}
                        placeholder='City'
                        onChange={handleCityChange}
                    />

                </Form.Group>
                <Form.Group inline>
                    <Form.Select
                        fluid
                        name="diabetes"
                        value={state.diabetes}
                        label='Diabetes'
                        options={diaboptions}
                        placeholder='Diabetes'
                        onChange={handleDiabetesChange}
                    />
                </Form.Group>
                <Form.Group inline>

                </Form.Group>


                <Form.Button>Submit</Form.Button>
            </Form>
            <br /> <br /> <br />
            <Responsive>
                <Checkbox name="onlyMinor" onClick={()=>{
                  let filteredList = list.filter(m =>  m.age <= 18 )
                         filteredList.map(m=>{
                            return <Container>

                            <Table columns={5}>


                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>{m.firstName}</Table.Cell>
                                        <Table.Cell>{m.lastName}</Table.Cell>
                                        <Table.Cell>{m.sex}</Table.Cell>
                                        <Table.Cell>{m.age}</Table.Cell>
                                        <Table.Cell>{m.city}</Table.Cell>
                                        <Table.Cell>{m.country}</Table.Cell>
                                    </Table.Row>

                                </Table.Body>


                            </Table>
                        </Container> 
                         })
                 }} label='Only minors' />
                {

                    list.map(m => {


                        return <Container>

                            <Table columns={5}>


                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>{m.firstName}</Table.Cell>
                                        <Table.Cell>{m.lastName}</Table.Cell>
                                        <Table.Cell>{m.sex}</Table.Cell>
                                        <Table.Cell>{m.age}</Table.Cell>
                                        <Table.Cell>{m.city}</Table.Cell>
                                        <Table.Cell>{m.country}</Table.Cell>
                                    </Table.Row>

                                </Table.Body>


                            </Table>
                        </Container>

                    })
                }
            </Responsive>


        </Container>

    )

}

