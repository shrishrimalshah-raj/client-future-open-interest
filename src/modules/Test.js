import React from "react";
import Chart from "react-google-charts";

const Test = () => {
  return (
    <div>
      <Chart
        width={"100%"}
        height={"500"}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data={[
          ["date", "Bank Nifty", "Nifty"],
          ["01-Jan-2020", 32102, 12182],
          ["02-Jan-2020", 32443, 12282],
          ["03-Jan-2020", 32069, 12226],
          ["06-Jan-2020", 31237, 11993],
          ["07-Jan-2020", 31399, 12052],
          ["08-Jan-2020", 31373, 12025],
          ["09-Jan-2020", 32092, 12215],
          ["10-Jan-2020", 32097, 12256],
          ["13-Jan-2020", 32177, 12329],
          ["14-Jan-2020", 32071, 12362],
          ["15-Jan-2020", 31824, 12343],
          ["16-Jan-2020", 31853, 12355],
          ["17-Jan-2020", 31590, 12352],
          ["20-Jan-2020", 31080, 12224],
          ["21-Jan-2020", 30947, 12169],
          ["22-Jan-2020", 30701, 12106],
          ["23-Jan-2020", 31004, 12180],
          ["24-Jan-2020", 31241, 12248],
          ["27-Jan-2020", 30837, 12119],
          ["28-Jan-2020", 30761, 12055],
          ["29-Jan-2020", 30877, 12129],
          ["30-Jan-2020", 30647, 12035],
          ["31-Jan-2020", 30833, 11962],
          ["01-Feb-2020", 29820, 11661],
          ["03-Feb-2020", 30023, 11707],
          ["04-Feb-2020", 30686, 11979],
          ["05-Feb-2020", 31001, 12089],
          ["06-Feb-2020", 31304, 12137],
          ["07-Feb-2020", 31201, 12098],
          ["10-Feb-2020", 31058, 12031],
          ["11-Feb-2020", 31300, 12107],
          ["12-Feb-2020", 31492, 12201],
          ["13-Feb-2020", 31230, 12174],
          ["14-Feb-2020", 30834, 12113],
          ["17-Feb-2020", 30680, 12045],
          ["18-Feb-2020", 30562, 11992],
          ["19-Feb-2020", 30838, 12125],
          ["20-Feb-2020", 30942, 12080],
          ["24-Feb-2020", 30455, 11829],
          ["25-Feb-2020", 30432, 11797],
          ["26-Feb-2020", 30306, 11678],
          ["27-Feb-2020", 30187, 11633],
          ["28-Feb-2020", 29147, 11201],
          ["02-Mar-2020", 28868, 11132],
          ["03-Mar-2020", 29177, 11303],
          ["04-Mar-2020", 28653, 11251],
          ["05-Mar-2020", 28815, 11269],
          ["06-Mar-2020", 27801, 10989],
          ["09-Mar-2020", 26462, 10451],
          ["11-Mar-2020", 26487, 10458],
          ["12-Mar-2020", 23971, 9590],
          ["13-Mar-2020", 25166, 9955],
          ["16-Mar-2020", 23101, 9197],
          ["17-Mar-2020", 22155, 8967],
          ["18-Mar-2020", 20580, 8468],
          ["19-Mar-2020", 20083, 8263],
          ["20-Mar-2020", 20317, 8745],
          ["23-Mar-2020", 16917, 7610],
          ["24-Mar-2020", 17107, 7801],
          ["25-Mar-2020", 18481, 8317],
          ["26-Mar-2020", 19613, 8641],
          ["27-Mar-2020", 19969, 8660],
          ["30-Mar-2020", 18782, 8281],
          ["31-Mar-2020", 19144, 8597],
          ["01-Apr-2020", 18208, 8253],
          ["03-Apr-2020", 17249, 8083],
          ["07-Apr-2020", 19062, 8792],
          ["08-Apr-2020", 18946, 8748],
          ["09-Apr-2020", 19913, 9111],
          ["13-Apr-2020", 19488, 8993],
          ["15-Apr-2020", 19057, 8925],
          ["16-Apr-2020", 19400, 8992],
          ["17-Apr-2020", 20681, 9266],
          ["20-Apr-2020", 20522, 9261],
          ["21-Apr-2020", 19409, 8981],
          ["22-Apr-2020", 19701, 9187],
          ["23-Apr-2020", 20267, 9313],
          ["24-Apr-2020", 19586, 9154],
          ["27-Apr-2020", 20081, 9282],
          ["28-Apr-2020", 20671, 9380],
          ["29-Apr-2020", 21090, 9553],
          ["30-Apr-2020", 21534, 9859],
          ["04-May-2020", 19743, 9293],
          ["05-May-2020", 19271, 9205],
          ["06-May-2020", 19694, 9270],
          ["07-May-2020", 19491, 9199],
          ["08-May-2020", 19352, 9251],
          ["11-May-2020", 18950, 9239],
          ["12-May-2020", 18862, 9196],
          ["13-May-2020", 19634, 9383],
          ["14-May-2020", 19068, 9142],
          ["15-May-2020", 18833, 9136],
          ["18-May-2020", 17573, 8823],
          ["19-May-2020", 17486, 8879],
          ["20-May-2020", 17840, 9066],
          ["21-May-2020", 17735, 9106],
          ["22-May-2020", 17278, 9039],
          ["26-May-2020", 17440, 9029],
          ["27-May-2020", 18710, 9314],
          ["28-May-2020", 19169, 9490],
          ["29-May-2020", 19297, 9580],
          ["01-Jun-2020", 19959, 9826],
          ["02-Jun-2020", 20530, 9979],
          ["03-Jun-2020", 20940, 10061],
          ["04-Jun-2020", 20390, 10029],
          ["05-Jun-2020", 21034, 10142],
          ["08-Jun-2020", 21187, 10167],
          ["09-Jun-2020", 20724, 10046],
          ["10-Jun-2020", 21100, 10116],
          ["11-Jun-2020", 20525, 9902],
          ["12-Jun-2020", 20654, 9972],
          ["15-Jun-2020", 19912, 9813],
          ["16-Jun-2020", 20296, 9914],
          ["17-Jun-2020", 20201, 9881],
          ["18-Jun-2020", 20956, 10091],
          ["19-Jun-2020", 21338, 10244],
          ["22-Jun-2020", 21708, 10311],
          ["23-Jun-2020", 22264, 10471],
          ["24-Jun-2020", 21426, 10305],
          ["25-Jun-2020", 21506, 10288],
          ["26-Jun-2020", 21592, 10383],
          ["29-Jun-2020", 21359, 10312],
          ["30-Jun-2020", 21370, 10302],
          ["01-Jul-2020", 21977, 10430],
          ["02-Jul-2020", 21953, 10551],
          ["03-Jul-2020", 21852, 10607],
          ["06-Jul-2020", 22198, 10763],
          ["07-Jul-2020", 22628, 10799],
          ["08-Jul-2020", 22584, 10705],
          ["09-Jul-2020", 22907, 10813],
          ["10-Jul-2020", 22398, 10768],
          ["13-Jul-2020", 22089, 10802],
          ["14-Jul-2020", 21392, 10607],
          ["15-Jul-2020", 21340, 10618],
          ["16-Jul-2020", 21597, 10739],
          ["17-Jul-2020", 21966, 10901],
          ["20-Jul-2020", 22321, 11022],
          ["21-Jul-2020", 22782, 11162],
          ["22-Jul-2020", 22882, 11132],
          ["23-Jul-2020", 23083, 11215],
          ["24-Jul-2020", 22662, 11194],
          ["27-Jul-2020", 21848, 11131],
          ["28-Jul-2020", 22105, 11300],
          ["29-Jul-2020", 22076, 11202],
          ["30-Jul-2020", 21646, 11102],
          ["31-Jul-2020", 21640, 11073],
          ["03-Aug-2020", 21072, 10891],
          ["04-Aug-2020", 21490, 11095],
          ["05-Aug-2020", 21509, 11101],
          ["06-Aug-2020", 21642, 11200],
          ["07-Aug-2020", 21754, 11214],
          ["10-Aug-2020", 21900, 11270],
          ["11-Aug-2020", 22227, 11322],
          ["12-Aug-2020", 22264, 11308],
          ["13-Aug-2020", 22196, 11300],
          ["14-Aug-2020", 21679, 11178],
          ["17-Aug-2020", 21700, 11247],
          ["18-Aug-2020", 22170, 11385],
          ["19-Aug-2020", 22285, 11408],
          ["20-Aug-2020", 21999, 11312],
          ["21-Aug-2020", 22299, 11371],
          ["24-Aug-2020", 22833, 11466],
          ["25-Aug-2020", 23092, 11472],
          ["26-Aug-2020", 23414, 11549],
          ["27-Aug-2020", 23600, 11559],
          ["28-Aug-2020", 24523, 11647],
          ["31-Aug-2020", 23754, 11387],
          ["01-Sep-2020", 23812, 11470],
          ["02-Sep-2020", 23874, 11535],
          ["03-Sep-2020", 23530, 11527],
          ["04-Sep-2020", 23011, 11333],
          ["07-Sep-2020", 22945, 11355],
          ["08-Sep-2020", 22744, 11317],
          ["09-Sep-2020", 22267, 11278],
          ["10-Sep-2020", 22466, 11449],
          ["11-Sep-2020", 22479, 11464],
          ["14-Sep-2020", 22101, 11440],
          ["15-Sep-2020", 22465, 11521],
          ["16-Sep-2020", 22573, 11604],
          ["17-Sep-2020", 22320, 11516],
          ["18-Sep-2020", 22031, 11504],
          ["21-Sep-2020", 21366, 11250],
          ["22-Sep-2020", 21139, 11153],
          ["23-Sep-2020", 21178, 11131],
          ["24-Sep-2020", 20456, 10805],
          ["25-Sep-2020", 20982, 11050],
          ["28-Sep-2020", 21665, 11227],
          ["29-Sep-2020", 21411, 11222],
          ["30-Sep-2020", 21451, 11247],
          ["01-Oct-2020", 22246, 11416],
        ]}
        options={{
          chart: {
            title:
              "Average Temperatures and Daylight in Iceland Throughout the Year",
          },
          width: 1600,
          height: 500,
          series: {
            // Gives each series an axis name that matches the Y-axis below.
            0: { axis: "Temps" },
            1: { axis: "Daylight" },
          },
          axes: {
            // Adds labels to each axis; they don't have to match the axis names.
            y: {
              Temps: { label: "Temps (Celsius)" },
              Daylight: { label: "Daylight" },
            },
          },
        }}
        rootProps={{ "data-testid": "4" }}
      />
    </div>
  );
};

export default Test;
