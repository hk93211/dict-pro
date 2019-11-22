/**
 * 将 平级的 array 数据 转化成 树形数据
 */
export const convertArrayToTree = (arrayDatas, id = 'id', pId = 'parentId') => {
  function exists(data, parentId) {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element[id] == parentId) return true;
    }
    return false;
  }

  if (!arrayDatas || !arrayDatas.length) return [];

  const nodes = [];
  // get the top level nodes
  for (let i = 0; i < arrayDatas.length; i++) {
    const row = arrayDatas[i];
    if (!exists(arrayDatas, row[pId])) {
      nodes.push(row);
    }
  }

  const toDo = [];
  for (let i = 0; i < nodes.length; i++) {
    toDo.push(nodes[i]);
  }
  while (toDo.length) {
    const node = toDo.shift(); // the parent node
    // get the children nodes
    for (let i = 0; i < arrayDatas.length; i++) {
      const row = arrayDatas[i];
      if (row[pId] == node[id]) {
        const child = row;
        if (node.children) {
          node.children.push(child);
        } else {
          node.children = [child];
        }
        toDo.push(child);
      }
    }
  }
  console.log(nodes);
  return nodes;
};