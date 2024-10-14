import { useAppContext } from "@/app/context/ContextProvider";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import exportFromJSON from "export-from-json";
import { MdRefresh } from "react-icons/md";
function Options({ loading, panel, refresh, setRefresh, search, setSearch }) {
  const [inProgress, setInProgress] = useState(loading);
  const { data } = useAppContext();

  const [csvData, setCsvData] = useState([]);
  const [sheet, setSheet] = useState("");
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const date = new Date();
    const fileMeta =
      "_" + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    if (data && data.allPayments && panel == 1) {
      console.log(data);
      setCsvData(data.allPayments);
      setSheet("Registrations" + fileMeta);
    } else if (data && data.teams && panel == 2) {
      setCsvData(data.teams);
      setSheet("Teams" + fileMeta);
    } else if (data && data.allUsers && panel == 3) {
      setCsvData(data.allUsers);
      setSheet("Users" + fileMeta);
    }
  }, [data]);

  async function generateCSV() {
    setInProgress(true);

    const exportType = exportFromJSON.types.csv;
    await exportFromJSON({
      data: csvData,
      fileName: sheet,
      exportType: exportType,
    });

    setInProgress(false);
  }

  return (
    <>
      <div className="flex items-center justify-between">
        {panel != 0 && (
          <div className="flex items-center bg-white space-x-2 px-2 rounded-md w-2/5">
            <CiSearch size={25} color="black" />
            <hr className="h-7 w-[1px] bg-black" />
            <input
              type="text"
              className="outline-none px-2 py-3 w-full  text-black"
              placeholder="Enter something to search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
          </div>
        )}
        <div className="flex space-x-3 items-center">
          {!loading && panel != 0 ? (
            <button
              onClick={() => {
                generateCSV();
              }}
            >
              <MdOutlineFileDownload size={30} />
            </button>
          ) : (
            <></>
          )}
          {!loading && (
            <button
              onClick={() => {
                setRefresh(!refresh);
              }}
            >
              <MdRefresh size={30} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Options;
