"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function BlogSlider() {
  const sectionRef = useRef(null);
  const hasLoadedRef = useRef(false);

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const fetchBlogs = useCallback(async () => {
    if (hasLoadedRef.current) return;

    hasLoadedRef.current = true;
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/blogs/latest", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Không thể tải danh sách bài viết");
      }

      const result = await response.json();

      setPosts(Array.isArray(result.blogs) ? result.blogs : []);
    } catch (error) {
      console.error("Lỗi tải blog:", error);
      setError("Không thể tải bài viết. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Khi còn cách section 1000px thì bắt đầu tải dữ liệu
  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          fetchBlogs();
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "1000px 0px",
        threshold: 0,
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, [fetchBlogs]);

  // Cập nhật lại Embla sau khi dữ liệu blog được tải
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit();
    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, posts]);

  return (
    <section ref={sectionRef} className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="border-l-4 border-yellow-500 pl-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:pl-5 md:text-4xl">
            Kinh nghiệm làm nhà
          </h2>

          <Link
            href="/bai-viet"
            className="flex cursor-pointer items-center justify-center text-sm md:text-base py-3 font-medium hover:text-primary"
          >
            Xem thêm
          </Link>
        </div>

        {/* Loading */}
        {isLoading && <BlogSkeleton />}

        {/* Error */}
        {!isLoading && error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-5 py-8 text-center text-red-600">
            {error}
          </div>
        )}

        {/* Slider */}
        {!isLoading && !error && posts.length > 0 && (
          <>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="ml-4 flex-[0_0_100%] shadow md:flex-[0_0_calc((100%-48px)/3)]"
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            {scrollSnaps.length > 1 && (
              <div className="mt-6 flex justify-center gap-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Chuyển đến slide ${index + 1}`}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      index === selectedIndex
                        ? "bg-primary"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* Empty */}
        {!isLoading && !error && hasLoadedRef.current && posts.length === 0 && (
          <div className="rounded-lg bg-gray-50 px-5 py-10 text-center text-gray-500">
            Chưa có bài viết nào.
          </div>
        )}
      </div>
    </section>
  );
}

function BlogCard({ post }) {
  return (
    <Link
      href={`/bai-viet/${post.slug}`}
      className="group block cursor-pointer"
    >
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={post.thumbnail || "/images/no-image.jpg"}
          alt={post.title}
          loading="lazy"
          className="h-[240px] w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="line-clamp-3 font-semibold text-gray-800 transition group-hover:text-yellow-600">
        {post.title}
      </h3>
    </Link>
  );
}

function BlogSkeleton() {
  return (
    <>
      {/* Mobile skeleton */}
      <div className="flex gap-4 overflow-hidden md:hidden">
        <div className="min-w-full animate-pulse">
          <div className="h-[240px] rounded-lg bg-gray-200" />
          <div className="mt-4 h-4 w-full rounded bg-gray-200" />
          <div className="mt-2 h-4 w-4/5 rounded bg-gray-200" />
        </div>
      </div>

      {/* Desktop skeleton */}
      <div className="hidden grid-cols-3 gap-4 md:grid">
        {[1, 2, 3].map((item) => (
          <div key={item} className="animate-pulse">
            <div className="h-[240px] rounded-lg bg-gray-200" />
            <div className="mt-4 h-4 w-full rounded bg-gray-200" />
            <div className="mt-2 h-4 w-4/5 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </>
  );
}