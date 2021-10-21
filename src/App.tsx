import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Title } from './components/Title'
import { Breadcrumbs } from './components/Breadcrumbs'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import { format } from 'date-fns';
import { AppStyle } from './style'


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


function App() {

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    coverage: '',
    central: '',
    cooperative: '',
    agency: '',
    situation: '',
    number:'',
    date_start: '',
    date_end: '',
  });


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
            <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-standard-label">Abrangência</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Abrangência"
                value={filterOptions.coverage}
                onChange={(e: any) => {
                  setFilterOptions({ ...filterOptions, coverage: e.target.value })
                  console.log(filterOptions);
                }}>
                <MenuItem value="">
                  Todos
                </MenuItem>
                <MenuItem value={'Cooperativa'}>Cooperativa</MenuItem>
                <MenuItem value={'Agência'}>Agência</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-standard-label">Central</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={filterOptions.central}
                label="Central"
                onChange={(e: any) => {
                  setFilterOptions({ ...filterOptions, central: e.target.value })
                }}>
                <MenuItem value="">
                  Todos
                </MenuItem>
                <MenuItem value={1234}>1234</MenuItem>
                <MenuItem value={1235}>1235</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-standard-label">Cooperativa</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={filterOptions.cooperative}
                label="Central"
                onChange={(e: any) => {
                  setFilterOptions({ ...filterOptions, cooperative: e.target.value })
                }}>
                <MenuItem value="">
                  Selecione a cooperativa
                </MenuItem>
                <MenuItem value={1234}>1234</MenuItem>
                <MenuItem value={1235}>1235</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-standard-label">Agência</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={filterOptions.agency}
                label="Central"
                onChange={(e: any) => {
                  setFilterOptions({ ...filterOptions, agency: e.target.value })
                }}>
                <MenuItem value="">
                  Selecione a Central
                </MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
              </Select>
            </FormControl>

          </div>

          <div className="row">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-standard-label">Situação </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={filterOptions.situation}
                label="Central"
                onChange={(e: any) => {
                  setFilterOptions({ ...filterOptions, situation: e.target.value })
                }}>
                <MenuItem value="">
                  Selecione a Central
                </MenuItem>
                <MenuItem value={'Vigente'}>Vigente</MenuItem>
                <MenuItem value={'Encerrado'}>Encerrado</MenuItem>
                <MenuItem value={'Inativo'}>Inativo</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Número"
              type="number"
              value={filterOptions.number}
              variant="standard"
              onChange={(e: any) => {
                setFilterOptions({ ...filterOptions, number: e.target.value })
              }}/>

              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Data Início"
                  value={filterOptions.date_start}
                  onChange={(newValue) => {
                    setFilterOptions({ ...filterOptions, date_start: newValue })
                  }}
                  inputFormat="dd/MM/yyyy"
                  renderInput={(params) => <TextField variant="standard" {...params} />}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Data de Término"
                  value={filterOptions.date_end}
                  onChange={(newValue) => {
                    setFilterOptions({ ...filterOptions, date_end: newValue })
                  }}
                  inputFormat="dd/MM/yyyy"
                  renderInput={(params) => <TextField variant="standard" {...params} />}
                />
              </LocalizationProvider> */}
          </div>
        </div>
      </div>
    </AppStyle>
  )
}

export default App
