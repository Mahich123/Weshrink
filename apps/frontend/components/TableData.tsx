import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "./ui/checkbox"

export default function TableData() {
  return (
    <div className="pt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Long Url</TableHead>
            <TableHead>Short Url</TableHead>
            <TableHead className="text-right">Total Url</TableHead>
            <TableHead>Expires At</TableHead>
            <TableHead>Blacklist</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Jack</TableCell>
            <TableCell>https://example.com/very-long-url</TableCell>
            <TableCell>https://wesh.com/myurl</TableCell>
            <TableCell className="text-right">15 urls</TableCell>
            <TableCell> 2023-12-31</TableCell>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className=""> 2023-11-21</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jack</TableCell>
            <TableCell>https://example.com/very-long-url</TableCell>
            <TableCell>https://wesh.com/myurl</TableCell>
            <TableCell className="text-right">15 urls</TableCell>
            <TableCell> 2023-12-31</TableCell>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className=""> 2023-11-21</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jack</TableCell>
            <TableCell>https://example.com/very-long-url</TableCell>
            <TableCell>https://wesh.com/myurl</TableCell>
            <TableCell className="text-right">15 urls</TableCell>
            <TableCell> 2023-12-31</TableCell>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className=""> 2023-11-21</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jack</TableCell>
            <TableCell>https://example.com/very-long-url</TableCell>
            <TableCell>https://wesh.com/myurl</TableCell>
            <TableCell className="text-right">15 urls</TableCell>
            <TableCell> 2023-12-31</TableCell>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className=""> 2023-11-21</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

