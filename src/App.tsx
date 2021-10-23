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
import { format } from 'date-fns'

import { SituationType } from './components/SituationType'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';

import { makeStyles } from '@mui/styles';

interface ICommitties {
  id: string;
  coverage: string;
  central: string | number;
  cooperative: string | number;
  agency: string | number;
  situation: string;
  date_start: string | Date | null;
  date_end: string | Date | null;
}

const rows: ICommitties[] = [
  { id: "1", coverage: 'Agência', central: '1001', cooperative: 1586, agency: 22, date_start: '13/10/2021', date_end: '14/10/2021', situation: 'vigente' },
  { id: "2", coverage: 'Agência', central: '1002', cooperative: 1586, agency: 23, date_start: '14/10/2021', date_end: '15/10/2021', situation: 'encerrado' },
  { id: "3", coverage: 'Agência', central: '1003', cooperative: 1586, agency: 24, date_start: '15/10/2021', date_end: '16/10/2021', situation: 'inativo' },
  { id: "4", coverage: 'Agência', central: '1001', cooperative: 1586, agency: 25, date_start: '16/10/2021', date_end: '17/10/2021', situation: 'vigente' },
  { id: "5", coverage: 'Cooperativa', central: '1001', cooperative: 1586, agency: 25, date_start: '17/10/2021', date_end: '18/10/2021', situation: 'vigente' },
  { id: "6", coverage: 'Cooperativa', central: '1001', cooperative: 1586, agency: 25, date_start: '17/10/2021', date_end: '18/10/2021', situation: 'vigente' },
  { id: "7", coverage: 'Cooperativa', central: '1001', cooperative: 1586, agency: 25, date_start: '17/10/2021', date_end: '18/10/2021', situation: 'vigente' },
];


interface FilterOptions {
  id: string | number;
  coverage: string;
  central: string | number;
  cooperative: string | number;
  agency: string | number;
  situation: string;
  date_start: string | Date | null;
  date_end: string | Date | null;
}

const coverageOptions = [
  { label: "Cooperativa", value: "Cooperativa" },
  { label: "Agência", value: "Agência" },
]

const centralOptions = [
  { label: "1001", value: "1001" },
  { label: "1235", value: "1235" },
]
const cooperativeOptions = [
  { label: "1586", value: "1586" },
  { label: "2568", value: "2568" },
]

const agencyOptions = [
  { label: "22", value: "22" },
  { label: "23", value: "23" },
  { label: "24", value: "24" },
  { label: "25", value: "25" },
]

const situationOptions = [
  { label: "Vigente", value: "Vigente" },
  { label: "Encerrado", value: "Encerrado" },
  { label: "Inativo", value: "Inativo" },
]


const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root.Mui-selected": {
      color: "#FFF",
      background:"var(--green)"
    }
  }
}));

function App() {
  const [items, setItems] = useState<ICommitties[]>(rows);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    coverage: '',
    central: '',
    cooperative: '',
    agency: '',
    situation: '',
    id: '',
    date_start: null,
    date_end: null,
  });


  const clearFilter = useCallback(() => {
    setFilterOptions({
      coverage: '',
      central: '',
      cooperative: '',
      agency: '',
      situation: '',
      id: '',
      date_start: null,
      date_end: null,
    });
    setItems(rows);
  }, [])

  const handleFilter = () => {
    const filteredData = rows.filter((item: any) => {
      let hasValues = Object.entries(filterOptions).filter(([k, v]) => {
        return v != '' && v != null
      })
      return hasValues.every(([key, value]) => {
        if (key == 'date_start' || key == 'date_end') {
          let formatedDate = format(value, 'dd/MM/yyyy')
          return item[key] == formatedDate
        } else {
          return item[key] == value
        }
      })

    })
    setItems(filteredData);
  }

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
                value={filterOptions.id}
                onChangeCallback={(value: string) => {
                  setFilterOptions({ ...filterOptions, id: value })
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
              <CustomButton color={'#FFF'} bgColor={'var(--green)'} label="Filtrar" icon={<Search />} eventCallback={handleFilter} />
            </div>
          </div>

          <div className="table-committees">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Número do Comitê</TableCell>
                    <TableCell align="right">Abrangência</TableCell>
                    <TableCell align="right">Central</TableCell>
                    <TableCell align="right">Cooperativa</TableCell>
                    <TableCell align="right">Agência</TableCell>
                    <TableCell align="right">Data Início <br /> Data Fim</TableCell>
                    <TableCell align="center">Situação</TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map((item: ICommitties) => (
                    <TableRow
                      key={item.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.id}
                      </TableCell>
                      <TableCell align="right">{item.coverage}</TableCell>
                      <TableCell align="right">{item.central}</TableCell>
                      <TableCell align="right">{item.cooperative}</TableCell>
                      <TableCell align="right">{item.agency}</TableCell>
                      <TableCell align="right">{item.date_start} <br /> {item.date_end}</TableCell>
                      <TableCell align="right"><SituationType value={item.situation} /> </TableCell>
                      <TableCell align="right">
                        <Button
                          id="basic-button"
                          aria-controls="basic-menu"
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                        >
                          <MoreVertIcon sx={{ color: 'var(--green)' }} />
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Editar</MenuItem>
                          <MenuItem onClick={handleClose}>Inativar</MenuItem>
                          <MenuItem onClick={handleClose}>Excluir</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Pagination
              count={Math.ceil(items.length / perPage)}
              page={page}
              onChange={handleChange}
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
              }}
              classes={{ ul: classes.ul }}
            />

          </div>
        </div>
      </div>
    </AppStyle>
  )
}

export default App

