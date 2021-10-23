import { SituationStyle } from './style'
import  Clear from '../../assets/icons/clear'
import  User from '../../assets/icons/user'

interface SituationTypeProps{
    value: string;
}
export const SituationType = ({value}: SituationTypeProps) => {

    return(
        <SituationStyle value={value}>
            { value == "vigente" && <Clear />}
            { value == "encerrado" && <Clear />}
            { value == "inativo" && <Clear />}
            {value}
        </SituationStyle>
    )
}