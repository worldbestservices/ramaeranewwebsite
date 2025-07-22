@@ .. @@
 import JoinPage from './pages/JoinPage'
 import ApplyFactoryPage from './pages/ApplyFactoryPage'
 import ContactPage from './pages/ContactPage'
 import Becomeshare from './pages/Becomeshare'
+import ProductsPage from './pages/ProductsPage'
 
 function App() {
   return (
@@ .. @@
           <Route path="about" element={<AboutPage />} />
           <Route path="industries" element={<IndustriesPage />} />
           <Route path="how-it-works" element={<HowItWorksPage />} />
+          <Route path="products" element={<ProductsPage />} />
           <Route path="success-stories" element={<SuccessStoriesPage />} />
           <Route path="join" element={<JoinPage />} />
           <Route path="shareholder" element={<Becomeshare/>} />
@@ .. @@