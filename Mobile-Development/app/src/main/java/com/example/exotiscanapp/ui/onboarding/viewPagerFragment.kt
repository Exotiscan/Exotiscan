package com.example.exotiscanapp.ui.onboarding

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.exotiscanapp.databinding.FragmentViewPagerBinding
import com.example.exotiscanapp.ui.onboarding.screen.FirstFragmentScreen
import com.example.exotiscanapp.ui.onboarding.screen.SecondFragmentScreen
import com.example.exotiscanapp.ui.onboarding.screen.ThirdFragmentScreen

class viewPagerFragment : Fragment() {
    private lateinit var binding: FragmentViewPagerBinding
    private lateinit var fragmentList: ArrayList<Fragment>

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        // Inflate the layout for this fragment
        binding = FragmentViewPagerBinding.inflate(inflater, container, false)
        fragmentList = arrayListOf(
            FirstFragmentScreen(),
            SecondFragmentScreen(),
            ThirdFragmentScreen()
        )
        val adapter = ViewPagerAdapter(
            fragmentList,
            requireActivity().supportFragmentManager,
            lifecycle
        )

        val viewPager = binding.viewPager2
        viewPager.isUserInputEnabled = false  // Nonaktifkan swipe manual

        viewPager.adapter = adapter
        val dotsIndicator = binding.dotsIndicator
        viewPager.adapter = adapter
        dotsIndicator.attachTo(viewPager)
        return binding.root
    }
}