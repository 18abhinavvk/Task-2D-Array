var arr=new Array(rows);
var rows=5;
var column=5;
for(var i=0;i<rows;i++)
{
    arr[i]=new Array(column);
}

//Array Input
for(var i=0;i<rows;i++)
    {
        for(var j=0;j<column;j++)
        {
            arr[i][j]=prompt("Enter Data for Rows and Columns");
        }
}


//Array Display
for(var i=0;i<rows;i++)
{
    for(var j=0;j<column;j++)
    {
        document.write(arr[i][j]+" ");
        
    }
    document.write("<br>");
}