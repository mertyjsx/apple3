import {useEffect,useState} from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ImageAnimation from "../components/ImageAnimation"
import  large_000 from "../images/large_000.jpg"
import  large_001 from "../images/large_001.jpg"
import  large_002 from "../images/large_002.jpg"
import  large_003 from "../images/large_003.jpg"
import  large_004 from "../images/large_004.jpg"
import  large_005 from "../images/large_005.jpg"
import  large_006 from "../images/large_006.jpg"
import  large_007 from "../images/large_007.jpg"
import  large_008 from "../images/large_008.jpg"
import  large_009 from "../images/large_009.jpg"
import  large_0010 from "../images/large_0010.jpg"
import  large_0011 from "../images/large_0011.jpg"
import  large_0012 from "../images/large_0012.jpg"
import  large_0013 from "../images/large_0013.jpg"
import  large_0014 from "../images/large_0014.jpg"
import  large_0015 from "../images/large_0015.jpg"
import  large_0016 from "../images/large_0016.jpg"
import  large_0017 from "../images/large_0017.jpg"
import  large_0018 from "../images/large_0018.jpg"
import  large_0019 from "../images/large_0019.jpg"
import  large_0020 from "../images/large_0020.jpg"
import  large_0021 from "../images/large_0021.jpg"
import  large_0022 from "../images/large_0022.jpg"
import  large_0023 from "../images/large_0023.jpg"
import  large_0024 from "../images/large_0024.jpg"
import  large_0025 from "../images/large_0025.jpg"
import  large_0026 from "../images/large_0026.jpg"
import  large_0027 from "../images/large_0027.jpg"
import  large_0028 from "../images/large_0028.jpg"
import  large_0029 from "../images/large_0029.jpg"
import  large_0030 from "../images/large_0030.jpg"
import  large_0031 from "../images/large_0031.jpg"
import  large_0032 from "../images/large_0032.jpg"
import  large_0033 from "../images/large_0033.jpg"
import  large_0034 from "../images/large_0034.jpg"
import  large_0035 from "../images/large_0035.jpg"
import  large_0036 from "../images/large_0036.jpg"
import  large_0037 from "../images/large_0037.jpg"
import  large_0038 from "../images/large_0038.jpg"
import  large_0039 from "../images/large_0039.jpg"
import  large_0040 from "../images/large_0040.jpg"
import  large_0041 from "../images/large_0041.jpg"
import  large_0042 from "../images/large_0042.jpg"
import  large_0043 from "../images/large_0043.jpg"
import  large_0044 from "../images/large_0044.jpg"
import  large_0045 from "../images/large_0045.jpg"
import  large_0046 from "../images/large_0046.jpg"
import  large_0047 from "../images/large_0047.jpg"
import  large_0048 from "../images/large_0048.jpg"
import  large_0049 from "../images/large_0049.jpg"
import  large_0050 from "../images/large_0050.jpg"
import  large_0051 from "../images/large_0051.jpg"
import  large_0052 from "../images/large_0052.jpg"
import  large_0053 from "../images/large_0053.jpg"
import  large_0054 from "../images/large_0054.jpg"
import  large_0055 from "../images/large_0055.jpg"
import  large_0056 from "../images/large_0056.jpg"
import  large_0057 from "../images/large_0057.jpg"
import  large_0058 from "../images/large_0058.jpg"
import  large_0059 from "../images/large_0059.jpg"
import  large_0060 from "../images/large_0060.jpg"
import  large_0061 from "../images/large_0061.jpg"
import  large_0062 from "../images/large_0062.jpg"
import  large_0063 from "../images/large_0063.jpg"
import  large_0064 from "../images/large_0064.jpg"
import  large_0065 from "../images/large_0065.jpg"
import  large_0066 from "../images/large_0066.jpg"
import  large_0067 from "../images/large_0067.jpg"
import  large_0068 from "../images/large_0068.jpg"
import  large_0069 from "../images/large_0069.jpg"
import  large_0070 from "../images/large_0070.jpg"
import  large_0071 from "../images/large_0071.jpg"
import  large_0072 from "../images/large_0072.jpg"
import  large_0073 from "../images/large_0073.jpg"
import  large_0074 from "../images/large_0074.jpg"
import  large_0075 from "../images/large_0075.jpg"
import  large_0076 from "../images/large_0076.jpg"
import  large_0077 from "../images/large_0077.jpg"
import  large_0078 from "../images/large_0078.jpg"
import  large_0079 from "../images/large_0079.jpg"
import  large_0080 from "../images/large_0080.jpg"
import  large_0081 from "../images/large_0081.jpg"
import  large_0082 from "../images/large_0082.jpg"
import  large_0083 from "../images/large_0083.jpg"
import  large_0084 from "../images/large_0084.jpg"
import  large_0085 from "../images/large_0085.jpg"
import  large_0086 from "../images/large_0086.jpg"
import  large_0087 from "../images/large_0087.jpg"
import  large_0088 from "../images/large_0088.jpg"
import  large_0089 from "../images/large_0089.jpg"

import  large_0090 from "../images/large_0090.jpg"
import  large_0091 from "../images/large_0091.jpg"
import  large_0092 from "../images/large_0092.jpg"
import  large_0093 from "../images/large_0093.jpg"
import  large_0094 from "../images/large_0094.jpg"
import  large_0095 from "../images/large_0095.jpg"
import  large_0096 from "../images/large_0096.jpg"
import  large_0097 from "../images/large_0097.jpg"
import  large_0098 from "../images/large_0098.jpg"
import  large_0099 from "../images/large_0099.jpg"




export default function Home({scrollPosition}) {

const [images,set_images]=useState([])

useEffect(()=>{

let Array=[
    large_000
    ,large_001
    ,large_002
    ,large_003
    ,large_004
    ,large_005
    ,large_006
    ,large_007
    ,large_008 
    ,large_009
    ,large_0010
    ,large_0011
,large_0012
    ,large_0013
    ,large_0014
    ,large_0015
    ,large_0016
    ,large_0017
    ,large_0018
    ,large_0019
    ,large_0020
    ,large_0021
    ,large_0022
    ,large_0023
    ,large_0024
    ,large_0025
    ,large_0026
    ,large_0027
    ,large_0028
    ,large_0029
    ,large_0030
    ,large_0031
    ,large_0032
    ,large_0033
    ,large_0034
    ,large_0035
    ,large_0036
    ,large_0037
    ,large_0038
    ,large_0039
    ,large_0040
    ,large_0041
    ,large_0042
    ,large_0043
    ,large_0044
    ,large_0045
    ,large_0046
    ,large_0047
    ,large_0048
    ,large_0049
    ,large_0050
    ,large_0051
    ,large_0052
    ,large_0053
    ,large_0054
    ,large_0055
    ,large_0056
    ,large_0057
    ,large_0058
    ,large_0059
    ,large_0060
    ,large_0061
    ,large_0062
    ,large_0063
    ,large_0064
    ,large_0065
    ,large_0066
    ,large_0067
    ,large_0068
    ,large_0069
    ,large_0070
    ,large_0071
    ,large_0072
    ,large_0073
    ,large_0074
    ,large_0075
    ,large_0076
    ,large_0077
    ,large_0078
    ,large_0079
    ,large_0080
    ,large_0081
    ,large_0082
    ,large_0083
    ,large_0084
    ,large_0085
    ,large_0086
    ,large_0087
    ,large_0088
    ,large_0089
    
    ,large_0090
    ,large_0091
    ,large_0092
    ,large_0093
    ,large_0094
    ,large_0095
    ,large_0096
    ,large_0097
    ,large_0098
    ,large_0099



]

set_images(Array)

},[])



  return (
    <div className={styles.container}>
        
    {images.map(item=> {
    
    
  return(<img key={item} className={`${item==scrollPosition?'laptop-height100':'laptop-height0'}`}  src={`/large_00${item}.jpg`}></img>)
     })}
     
    

   </div>
  )
}
