import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: "BarChart3" },
    { id: "analytics", label: "Analytics", icon: "TrendingUp" },
    { id: "products", label: "Products", icon: "Package" },
    { id: "customers", label: "Customers", icon: "Users" },
    { id: "orders", label: "Orders", icon: "ShoppingCart" },
    { id: "settings", label: "Settings", icon: "Settings" },
  ];

  const statsCards = [
    {
      title: "Total Sales",
      value: "$45,231",
      change: "+12%",
      changeType: "positive",
      icon: "DollarSign",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Orders",
      value: "2,847",
      change: "+8%",
      changeType: "positive", 
      icon: "ShoppingBag",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Revenue",
      value: "$89,542",
      change: "+23%",
      changeType: "positive",
      icon: "CreditCard",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Active Users",
      value: "12,847",
      change: "-2%",
      changeType: "negative",
      icon: "Users",
      color: "from-orange-500 to-red-500"
    }
  ];

  const ordersData = [
    {
      id: "1",
      product: "Wireless Headphones",
      customer: "John Doe",
      status: "Delivered",
      price: "$299.99",
      date: "2024-01-15"
    },
    {
      id: "2", 
      product: "Smart Watch",
      customer: "Jane Smith",
      status: "Processing",
      price: "$599.99",
      date: "2024-01-14"
    },
    {
      id: "3",
      product: "Gaming Mouse",
      customer: "Mike Johnson",
      status: "Shipped",
      price: "$79.99",
      date: "2024-01-13"
    },
    {
      id: "4",
      product: "Keyboard Pro",
      customer: "Sarah Wilson",
      status: "Pending",
      price: "$159.99",
      date: "2024-01-12"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-800";
      case "Processing": return "bg-blue-100 text-blue-800";
      case "Shipped": return "bg-purple-100 text-purple-800";
      case "Pending": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredOrders = ordersData.filter(order =>
    order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">NextKit</h1>
          </div>
        </div>
        
        <nav className="p-4 space-y-2">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            HOME
          </div>
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-blue-50 text-blue-600 border-r-2 border-blue-500"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon name={item.icon} className="w-4 h-4" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
          
          <div className="pt-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              UTILITIES
            </div>
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
              <Icon name="Type" className="w-4 h-4" />
              <span className="font-medium">Typography</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
              <Icon name="Table" className="w-4 h-4" />
              <span className="font-medium">Order Table</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
              <Icon name="FileText" className="w-4 h-4" />
              <span className="font-medium">Form</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 capitalize">{activeSection}</h2>
              <p className="text-gray-600">Welcome back, Admin</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Icon name="Bell" className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Search" className="w-4 h-4" />
              </Button>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto h-full">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <Card key={index} className="relative overflow-hidden animate-fade-in">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                    <Icon name={stat.icon} className="w-4 h-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className="text-xs text-gray-600 flex items-center mt-1">
                    <span className={`inline-flex items-center ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <Icon 
                        name={stat.changeType === 'positive' ? 'TrendingUp' : 'TrendingDown'} 
                        className="w-3 h-3 mr-1" 
                      />
                      {stat.change}
                    </span>
                    <span className="ml-1">from last month</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Sales Overview</span>
                  <Badge variant="secondary">Last 8 Months</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="BarChart3" className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-gray-600">Chart visualization would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Monthly Earnings</CardTitle>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">$670</span>
                  <Badge className="bg-green-100 text-green-800">+14.6%</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="TrendingUp" className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-600">Earnings chart would display here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Orders Table */}
          <Card className="animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Search orders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64"
                  />
                  <Button variant="outline" size="icon">
                    <Icon name="Filter" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">#{order.id}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-semibold">{order.price}</TableCell>
                      <TableCell className="text-gray-600">{order.date}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <Icon name="MoreHorizontal" className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;