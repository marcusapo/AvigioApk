import { Bar, BoxBar, Main } from "./style";
import { IndexProps } from "./models";
import { BoxCommon } from "~/atomic/atoms";

const Chart: React.FC<IndexProps> = ({
    data,
    mt,
    mr,
    mb,
    ml
}) => {
    return (
        <Main>
            {
                data?.map((item, index) => (
                    <>
                        {
                            item.value <= 0 ? (
                                <BoxCommon width="70px" height="200px" justifyContent="flex-end" alignItems="center">
                                    <h6 className='fontCenter fontPrimary fontW700'>
                                        { item.value }
                                    </h6>
                                    <h6 className='fontSmall fontCenter'>
                                        { item.label }
                                    </h6>
                                </BoxCommon>
                            ) : (
                                <BoxBar value={(((item.value * 1000) / (data.length * 2)))} key={index}>
                                    <h6 className='fontCenter fontPrimary fontW700'>
                                        { item.value }
                                    </h6>
                                    <Bar
                                        onClick={() => {
                                            item.onClick && item.onClick()
                                        }}
                                        />
                                    <h6 className='fontSmall fontCenter'>
                                        { item.label }
                                    </h6>
                                </BoxBar>
                            )
                        }
                    </>
                ))
            }
        </Main>
    )
}

export default Chart;