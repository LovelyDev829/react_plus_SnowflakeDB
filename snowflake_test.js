const Snowflake = require('snowflake-promise').Snowflake
// or, for TypeScript:
// import { Snowflake } from 'snowflake-promise';

async function main() {
  const snowflake = new Snowflake({
    account: 'nqgzlco-ccb74816',
    username: 'DEV1KO',
    password: 'Barcelona909',
    database: 'SNOWFLAKE_SAMPLE_DATA',
    warehouse: 'COMPUTE_WH',
    schema: 'TPCDS_SF100TCL'
  })

  console.log("sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfds")
  await snowflake.connect().then((res) => {
    console.log("res", res)
  }).catch((err) => console.log("err", err))

  // const rows = await snowflake.execute(
  //   'SELECT COUNT(*) FROM INFORMATION_SCHEMA',
  //   ['AUTOMOBILE']
  // )

  // console.log(rows)
}

main()