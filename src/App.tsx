import { useCallback, useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Title } from './components/Title'
import { Breadcrumbs } from './components/Breadcrumbs'
import { AppStyle } from './style'
import { SelectField } from './components/SelectField'
import { InputField } from './components/InputField'
import { DateField } from './components/DateField'
import { CustomButton } from './components/CustomButton'
import Clear from './assets/icons/clear';
import Search from './assets/icons/search';
// import { DataGrid } from '@material-ui/core/Grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: any) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



interface FilterOptions {
  coverage: string;
  central: string | number;
  cooperative: string | number;
  agency: string | number;
  situation: string;
  number: string | number;
  date_start: string | Date | null;
  date_end: string | Date | null;
}

const coverageOptions = [
  { label: "Cooperativa", value: "Cooperativa" },
  { label: "Agência", value: "Agência" },
]

const centralOptions = [
  { label: "1234", value: "1234" },
  { label: "1235", value: "1235" },
]
const cooperativeOptions = [
  { label: "6586", value: "6586" },
  { label: "2568", value: "2568" },
]

const agencyOptions = [
  { label: "23", value: "23" },
  { label: "45", value: "45" },
]

const situationOptions = [
  { label: "Vigente", value: "Vigente" },
  { label: "Encerrado", value: "Encerrado" },
  { label: "Inativo", value: "Inativo" },
]

function App() {

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    coverage: '',
    central: '',
    cooperative: '',
    agency: '',
    situation: '',
    number: '',
    date_start: '',
    date_end: '',
  });


  const clearFilter = useCallback(() => {
    setFilterOptions({
      coverage: '',
      central: '',
      cooperative: '',
      agency: '',
      situation: '',
      number: '',
      date_start: '',
      date_end: '',
    });
  },[])
 

  useEffect(() => {
    console.log(filterOptions);
  }, [filterOptions])
  return (
    <AppStyle>
      <Navbar />
      <div className="container">
        <Title>
          Comitê Jovem: Comitês e mandatos
        </Title>
        <Breadcrumbs>
          <a href="">Início</a>
          <a href="">Gestão de comitês</a>
          <span>Comitês e Mandatos</span>
        </Breadcrumbs>
        <div className="filters">
          <div className="row">
            <div className="item">
              <SelectField
                variant="standard"
                label="Abrangência"
                value={filterOptions.coverage}
                options={coverageOptions}
                onChangeCallback={(value: string) => {
                  setFilterOptions({ ...filterOptions, coverage: value })
                }}
              />
            </div>
            <div className="item">
              <SelectField
                variant="standard"
                label="Central"
                value={filterOptions.central}
                options={centralOptions}
                onChangeCallback={(value: string) => {
                  setFilterOptions({ ...filterOptions, central: value })
                }}
              />
            </div>
            <div className="item">
              <SelectField
                variant="standard"
                label="Cooperativa"
                value={filterOptions.cooperative}
                options={cooperativeOptions}
                onChangeCallback={(value: string) => {
                  setFilterOptions({ ...filterOptions, cooperative: value })
                }}
              />
            </div>
            <div className="item">
              <SelectField
                variant="standard"
                label="Agência"
                value={filterOptions.agency}
                options={agencyOptions}
                onChangeCallback={(value: string) => {
                  setFilterOptions({ ...filterOptions, agency: value })
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="item">
              <SelectField
                variant="standard"
                label="Situação"
                value={filterOptions.situation}
                options={situationOptions}
                onChangeCallback={(value: string) => {
                  setFilterOptions({ ...filterOptions, situation: value })
                }}
              />
            </div>
            <div className="item">
              <InputField
                type="number"
                label="Número"
                value={filterOptions.number}
                onChangeCallback={(value: string) => {
                  setFilterOptions({ ...filterOptions, number: value })
                }}
              />
            </div>
            <div className="item">
              <DateField
                label="Data Início"
                value={filterOptions.date_start}
                onChangeCallback={(value: string) => {
                  setFilterOptions({ ...filterOptions, date_start: value })
                }}
              />
            </div>
            <div className="item">
              <DateField
                label="Data de Término"
                value={filterOptions.date_end}
                onChangeCallback={(value: string) => {
                  setFilterOptions({ ...filterOptions, date_end: value })
                }}
              />
            </div>
            <div className="item">
                <CustomButton color={'var(--green)'} eventCallback={clearFilter} border={'var(--green)'} label="Limpar Filtros" icon={<Clear />} />
                <CustomButton color={'#FFF'} bgColor={'var(--green)'} label="Filtrar" icon={<Search />} />
            </div>
          </div>

            <div className="registros">

            </div>
        </div>
      </div>
    </AppStyle >
  )
}

export default App
