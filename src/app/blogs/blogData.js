const blogData = [
  {
    id: 1,
    title: "Why NextJS is better than ReactJS",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADV1dXh4eGjo6NZWVm+vr7Jycl9fX2NjY2Tk5Pe3t7v7+/39/f8/PzMzMzo6OhISEirq6uHh4fw8PB4eHizs7PFxcUvLy9DQ0M1NTVTU1Nvb28lJSVmZmYVFRWnp6dGRkYcHByZmZk8PDwXFxdhYWEpKSlYWFgsBK0WAAAE60lEQVR4nO2a2XLbOBBFScuLFkvWZsuxpcixPLL//wtHXNAgSCwkRKZqas55SFIgCOKKQPdFM0kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/21uFPNg19lNC5oDL13jjWajnJnqMW/zAOdwLlLFKth1lbbgUfU+SZNjTjvpoH6WhzYPmEYrTMehrnedFCZ71fRqHW0pt9yrpqc2DzjFK0xf+lWYvKq235bBFkd1dSNtgytMb/xduyqc+2YlS76yO4ZXmG57VZjcSOt9fayxunJc/FWFv/pVmLxI88gcyn5h6EiTsW+h8Pxx6+ZkJp1nNfBhUW2eyQONl7s8VYf6UDevjSc8XacwvQ0r7LRMvtTAd5VGvUG9L0Slky7Ps1BfBJ6f6C5imSxsYn6ptrP33vteFb5I8H50do1RmIxEoiQjWbqfC9+dPSt8kq3x5uwapVDmmaazomEtDQED1q/CB/1gW37OiVOYbNTAxzwK6RTyELixb4V68bhCSaRCM7l7bYBJ7wp13HP8uLEKdTS7GLS34FIR+leof177BolWWDHZATtu0L9CnYgP1iAXrbASbQR3yG7c1f15BsbCFDNlTVQxGb9kWhcYMPk5QyjUhnhi6VoqfJ9ObGxGlluEH1OgzzoJgyhM/siOaXYNOG+/YTxWu3rtrzCMQh33Zo2uVyl8rPT8aje1gRSKyzo2SlNXKawc/j7DRa+cgRTquPde73qdwkppyn/QbsykixwLDYXJRE1kU+t6pcLkt+rptr4GgylM3tVMaqWpgMKQzUySb9V1mEizGC1tedw2PYl7ZrQpFY6XMyve3fWc/aFNU2/Z4kGun3I/uGoWDG0KtcsyZh3vaS7ni1yiPle0qUW0UfhUXn/8R43cqDVZl9jO2j1eYeaV1tk/PkRii+J8F4X52r+dZNWD51oX+yYSl1XtHq2w8Lu5URPnbbe+Bh0UrtWWyu6pWV67wuSsZrLWbbEKVa0mTxJyRPPXaNRsWyrcS/RafaY7s4tDYfKpZqI9cqxCVXh6zV5byzpbRjeFzi9LLoVbmYm89EiFUjso4paule4CN3ZQmG30Z4eRcCnULkvyc5xCXXgqDx+63t1DJUpFmkPW8c/EdihzKkxu1URUfo5SaPl2ob9Z+A1qF4ULFcI2jTfpVqhdVpmfYxRat51Em4b1Neii8HJk2JSWqX4o8ijUHwCL/BxzxpfCUzV06kJ43foadFN4YVuUgWorw6dQv4A82pQKV2MPe3N4nf6MZl0Itxy04xUmRRyrWUKfQr2JDhWFfox0K1u5HlQahfDrFG6nJ7UJxo3P9V6FOhCeYxTqQ29jeCmE19dUS4WXgPxd/v1VLPvyEe+NGpNfoU5m0+4KdUq1bF05orm/ytoVzvev98Xqylb4d7GXs7J6nimyOF1z9QGFOlTsOiuU46C1vC1HtLpTDijMNCyKKLjKo32WHnIbcfzJvx/UzU1IoY57W/Gq7RRKsgn9b5O19bpP4WVlb5WtLN6YTrt39WHKdreD0i5L0lgrhZNmk4n+H0OOw6Jd4fZ8KALwx8/Fxeiv6i/ni+a3cdPVLAs87mI5KpmNwszkUHSjzv7O+r2+y3597r0KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwv+Vfynwx33WBCacAAAAASUVORK5CYII=", // Place your image in the public/images directory
    description:
      "Next.js is better than React.js for building modern web applications because it combines the power of React with essential features for server-side rendering, routing, and optimized performance out of the box.",
    content: `
      <p>When it comes to building web applications, React.js has long been a popular choice among developers. Its component-based architecture and rich ecosystem have made it a go-to framework for building interactive user interfaces. However, for more complex projects and those with specific requirements, Next.js emerges as a superior option.</p>
      <p><strong>Server-Side Rendering (SSR):</strong><br>
      Next.js offers built-in support for server-side rendering, a feature crucial for improving SEO, reducing initial load times, and enhancing user experience. React.js, on the other hand, primarily focuses on client-side rendering. While SSR can be achieved in React through additional libraries, Next.js simplifies this process by integrating it natively.</p>
      <p><strong>Routing Simplified:</strong><br>
      Managing routing in React.js typically requires third-party libraries like React Router. In contrast, Next.js provides an effortless routing system out of the box. Developers can create dynamic routes, nested routes, and more with minimal setup, streamlining the development process.</p>
      <p><strong>Optimized Performance:</strong><br>
      Next.js optimizes performance through features like code splitting, automatic image optimization, and lazy loading. It ensures that only the necessary code is sent to the client, resulting in faster page loads and a smoother user experience. React.js developers need to manually implement such optimizations, which can be time-consuming and error-prone.</p>
      <p><strong>Zero Configuration:</strong><br>
      Next.js embraces the &quot;zero configuration&quot; philosophy, reducing the setup overhead. React.js projects often require additional configuration and the selection of various tools and libraries to set up a complete development environment. Next.js minimizes these hassles, allowing developers to focus on writing code.</p>
      <p><strong>Static Site Generation (SSG):</strong><br>
      Next.js goes beyond SSR by offering Static Site Generation (SSG). This means that parts of your website can be pre-rendered at build time, further improving performance and scalability.</p>
      <p>In summary, while React.js remains a valuable choice for smaller projects and certain use cases, Next.js shines when it comes to more extensive applications that demand server-side rendering, optimized performance, and simplified development. Its native support for SSR, routing, and performance optimizations make it a compelling choice for modern web development.</p>
      
    `,
  },
  {
    id: 2,
  title: "The Power of Digital Marketing in the Modern World",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROAOKdRyI8D7WGuNodrx6fVco3fEEYoa0MlA&usqp=CAU",
  description:
    "Digital marketing has become a driving force in the modern business landscape. It encompasses a wide range of online strategies and tools that businesses can leverage to reach their target audience and achieve their goals.",
  content: `
      <p>When it comes to promoting products and services, traditional marketing methods are no longer sufficient. The advent of the internet and the proliferation of digital devices have transformed the way businesses connect with consumers. This is where digital marketing comes into play, offering a host of advantages over traditional marketing.</p>
      <p><strong>Targeted Advertising:</strong><br>
      One of the key benefits of digital marketing is the ability to target specific demographics and audiences. With tools like Google Ads and Facebook Ads, businesses can show their ads to users based on their interests, behavior, and location, ensuring that their message reaches the right people.</p>
      <p><strong>Data-Driven Insights:</strong><br>
      Digital marketing provides access to a wealth of data and analytics. Businesses can track the performance of their campaigns in real-time, allowing for quick adjustments and optimizations. This data-driven approach enables marketers to make informed decisions and maximize their ROI.</p>
      <p><strong>Cost-Effective:</strong><br>
      Compared to traditional advertising channels, digital marketing is often more cost-effective. Businesses can set their budgets and choose to pay per click, impression, or conversion. This flexibility ensures that marketing dollars are spent efficiently.</p>
      <p><strong>Global Reach:</strong><br>
      The internet has a global reach, and digital marketing allows businesses to expand their audience beyond geographical boundaries. This is particularly valuable for businesses looking to tap into international markets.</p>
      <p><strong>Engagement and Interactivity:</strong><br>
      Digital marketing strategies such as social media marketing and email marketing enable direct engagement with customers. Businesses can interact with their audience, gather feedback, and build lasting relationships.</p>
      <p>In conclusion, digital marketing has revolutionized the way businesses promote their products and services. Its targeted approach, data-driven insights, cost-effectiveness, global reach, and engagement capabilities make it an essential tool for modern businesses seeking success in the digital age.</p>
    `,
  }
];

export default blogData;
