import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Toast } from "../components/common/Toast";

export default function () {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formDatas, setFormDatas] = useState([]);
  useEffect(() => {
    const getLocalData = localStorage.getItem("formData");
    if (getLocalData) {
      const localData = JSON.parse(getLocalData);
      setFormDatas(localData);
    }
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      AlignType: "center",
      textWrap: "wrap",
      // sorter will be asc or desc
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Sector",
      dataIndex: "sector",
      key: "sector",
      AlignType: "center",
      textWrap: "wrap",
      sorter: (a, b) => a.sector.localeCompare(b.sector),
    },
    {
      title: "Action",
      key: "action",
      AlignType: "center",
      textWrap: "wrap",
      render: (text, record) => (
        <div className="flex ">
          {/* icon */}
          <BiEdit className="text-blue-500 cursor-pointer text-[24px]" />
          <AiOutlineDelete
            onClick={() => handleDelete(record)}
            className="text-red-500 cursor-pointer ml-4 text-[24px]"
          />
        </div>
      ),
    },
  ];

  const handleDelete = (record) => {
    Swal.fire({
      title: "Are you sure?",
      text: "want to delete this data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        const filterData = formDatas.filter(
          (item, index) =>
            item.name !== record.name && item.sector !== record.sector
        );
        localStorage.setItem("formData", JSON.stringify(filterData));
        setFormDatas(filterData);
        Toast.fire({
          icon: "success",
          title: "Data Deleted Successfully",
        });
      }
    });
  };

  return (
    <Layout>
      <div className="text-center mt-6">
        <h1 className="title font-bold text-[30px]">Profile</h1>
      </div>
      <div className="mt-[48px] rounded-[8px] ">
        <Table
          columns={columns}
          dataSource={formDatas}
          pagination={{
            pageSize: pageSize,
            current: page,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
          rowKey={(record) => record.name}
        />
      </div>
    </Layout>
  );
}
