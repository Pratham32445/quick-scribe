"use client";

import {
  Bell,
  Check,
  Clock,
  Mail,
  MessageSquare,
  ShoppingCart,
  User,
} from "lucide-react";
import { Button } from "../../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

export default function NotificationCard() {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50 overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-medium">Notification</h3>
      </div>

      <Tabs defaultValue="all">
        <div className="px-2 pt-2">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="all" className="text-xs">
              All
            </TabsTrigger>
            <TabsTrigger value="messages" className="text-xs">
              <MessageSquare className="h-3.5 w-3.5 mr-1" />
              <span>Message</span>
            </TabsTrigger>
            <TabsTrigger value="alerts" className="text-xs">
              <Bell className="h-3.5 w-3.5 mr-1" />
              <span>Alerts</span>
            </TabsTrigger>
            <TabsTrigger value="cart" className="text-xs">
              <ShoppingCart className="h-3.5 w-3.5" />
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="m-0">
          <div className="max-h-72 overflow-y-auto">
            {/* Notification Items */}
            <div className="p-3 hover:bg-gray-50 border-b flex">
              <div className="mr-3 bg-blue-100 rounded-full p-2">
                <Mail className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">New message received</p>
                <p className="text-xs text-gray-500">3 unread messages</p>
                <p className="text-xs text-gray-400 mt-1">
                  <Clock className="h-3 w-3 inline mr-1" />2 min ago
                </p>
              </div>
            </div>

            <div className="p-3 hover:bg-gray-50 border-b flex">
              <div className="mr-3 bg-green-100 rounded-full p-2">
                <ShoppingCart className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Order confirmed</p>
                <p className="text-xs text-gray-500">
                  Your order #2912 has shipped
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  <Clock className="h-3 w-3 inline mr-1" />1 hour ago
                </p>
              </div>
            </div>

            <div className="p-3 hover:bg-gray-50 border-b flex">
              <div className="mr-3 bg-purple-100 rounded-full p-2">
                <User className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium">New user registered</p>
                <p className="text-xs text-gray-500">5 new users this week</p>
                <p className="text-xs text-gray-400 mt-1">
                  <Clock className="h-3 w-3 inline mr-1" />2 days ago
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="m-0">
          <div className="p-4 text-center text-sm text-gray-500">
            No new messages
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="m-0">
          <div className="p-4 text-center text-sm text-gray-500">
            No new alerts
          </div>
        </TabsContent>

        <TabsContent value="cart" className="m-0">
          <div className="p-4 text-center text-sm text-gray-500">
            Your cart is empty
          </div>
        </TabsContent>
      </Tabs>

      <div className="p-3 border-t">
        <Button variant="outline" className="w-full text-sm">
          <Check className="h-4 w-4 mr-2" />
          Mark all as read
        </Button>
      </div>
    </div>
  );
}
