import type { Post } from "@/models/Post";

// Sample fake data
export const fakeData: Post[] = [
    {
      id: "1",
      title: "Welcome to VueBlog",
      text: "This is a sample post using Vuetify and Vue 3!",
      author: "Admin",
      date: new Date().toISOString().split("T")[0],
    },
    {
      id: "2",
      title: "Vuetify Tips",
      text: "Learn how to use Vuetify with Vue 3 and Composition API.",
      author: "John Doe",
      date: new Date().toISOString().split("T")[0],
    },
  ];
  
  